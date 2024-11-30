import React from 'react'

const Options = ({ onLeaveFeedback, onReset, showReset, buttonStyle }) => {
	return (
		<div>
			<button style={buttonStyle} onClick={() => onLeaveFeedback('good')}>
				Good
			</button>
			<button style={buttonStyle} onClick={() => onLeaveFeedback('neutral')}>
				Neutral
			</button>
			<button style={buttonStyle} onClick={() => onLeaveFeedback('bad')}>
				Bad
			</button>
			{showReset && <button onClick={onReset}>Reset</button>}
		</div>
	)
}

export default Options