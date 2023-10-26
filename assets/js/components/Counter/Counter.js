import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function Counter({ status }) {
	const [currentNumber, setCurrentNumber] = useState(0);
	const [counterStatus, setCounterStatus] = useState('manual');

	useEffect(() => {
		if (status == 'auto') {
			setCounterStatus('auto');
			const intervalId = setInterval(() => {
				setCurrentNumber(currentNumber => currentNumber + 1);
			}, 1000);

			return () => clearInterval(intervalId);
		}
	}, [status]);

	function handleIncrement(e) {
		e.preventDefault();
		setCurrentNumber(currentNumber => currentNumber + 1);
	}

	function handleDecrement(e) {
		e.preventDefault();
		setCurrentNumber(currentNumber => currentNumber - 1);
	}

	const styleButtons = {
		display: status == 'auto' ? 'none' : 'flex'
	};

	return (
		<div id="counter-comp" style={styleCounterComp}>
			<div className="Number" style={styleNumber}>
				{currentNumber}
			</div>
			<div className="buttons" style={styleButtons}>
				<Button
					action="minus"
					text="-"
					hoverColor="red"
					backgrounColor="white"
					fontColor="white"
					handleClick={handleDecrement}
				/>
				<Button
					action="plus"
					text="+"
					hoverColor="purple"
					backgrounColor="white"
					fontColor="white"
					handleClick={handleIncrement}
				/>
			</div>
		</div>
	);
}

const styleCounterComp = {
	width: '100%',
	maxWidth: '400px',
	margin: '0 auto',
	paddingTop: '100px'
};

const styleNumber = {
	border: '3px solid black',
	padding: '20px',
	fontSize: '2rem',
	fontWeight: '900',
	textAlign: 'center'
};
