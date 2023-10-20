import React from 'react';

export default function Counter() {
	return (
		<div id="counter-comp" style={styleCounterComp}>
			<div className="Number" style={styleNumber}>
				0
			</div>
			<div className="buttons" style={styleButtons}>
				<div className="minus" style={styleButton}>
					{' '}
					-{' '}
				</div>
				<div className="plus" style={styleButton}>
					{' '}
					+{' '}
				</div>
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
const styleButton = {
	width: '50%',
	border: '3px solid black',
	padding: '20px',
	fontSize: '2rem',
	fontWeight: '900',
	textAlign: 'center',
	cursor: 'pointer'
};

const styleButtons = {
	display: 'flex'
};
