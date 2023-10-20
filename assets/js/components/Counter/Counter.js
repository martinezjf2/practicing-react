import React from 'react';
import Button from './Button';

export default function Counter() {
	return (
		<div id="counter-comp" style={styleCounterComp}>
			<div className="Number" style={styleNumber}>
				0
			</div>
			<div className="buttons" style={styleButtons}>
				<Button
					action="minus"
					text="-"
					hoverColor="red"
					backgrounColor="white"
				/>
				<Button
					action="plus"
					text="+"
					hoverColor="purple"
					backgrounColor="white"
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

const styleButtons = {
	display: 'flex'
};
