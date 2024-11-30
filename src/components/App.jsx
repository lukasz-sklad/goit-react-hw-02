import React, { useState, useEffect } from 'react'
import Header from './Header'
import Options from './Options'
import Feedback from './Feedback'
import Notification from './Notification'

const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback')
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 }
    })

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback))
    }, [feedback])

    const updateFeedback = feedbackType => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }))
    }

    const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 })
    }
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad

    const buttonStyle = {
			marginRight: '10px',
		}

    return (
			<div>
				<Header />
				<Options
					onLeaveFeedback={updateFeedback}
					onReset={resetFeedback}
					showReset={totalFeedback > 0}
					buttonStyle={buttonStyle}
				/>

				{totalFeedback > 0 ? <Feedback feedback={feedback} /> : <Notification message='No feedback yet' />}
			</div>
		)
}

export default App