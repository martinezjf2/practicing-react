import React, { useState } from 'react';
import update from 'immutability-helper';

export default function Immutable() {
	const [status, setStatus] = useState('manual');
	const [currentNumber, setCurrentNumber] = useState(0);
	const [background, setBackground] = useState('black');

	function handleClick() {
		console.log('Clicked Button');
		setBackground('green');
	}

	let changeToActive = background == 'green' ? 'active' : '';

	return (
		<div style={immutableStyle}>
			<div className={`box ${changeToActive}`}></div>
			<div style={buttonStyle} className="button" onClick={handleClick}>
				Press Me
			</div>
		</div>
	);
}

const immutableStyle = {
	width: '100%',
	maxWidth: '400px',
	margin: '0 auto'
};

const buttonStyle = {
	borderRadius: '4px',
	background: 'blue',
	padding: '10px 20px',
	margin: '20px 0',
	color: 'white',
	cursor: 'pointer'
};
