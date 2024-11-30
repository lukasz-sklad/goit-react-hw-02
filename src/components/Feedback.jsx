import React from 'react'

const Feedback = ({ feedback }) => {
    const { good, neutral, bad } = feedback
    const total = good + neutral + bad
    const positive = total > 0 
        ? Math.round(((good + neutral) / total) * 100)
        : 0

    return (
        <div>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
        </div>
    )
}

export default Feedback
