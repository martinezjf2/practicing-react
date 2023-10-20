import React from 'react';

export default function Counter() {
	return (
		<div id="counter-comp" style={styleCounterComp}>
			<div className="Number">0</div>
			<div className="buttons">
				<div className="minus"> - </div>
				<div className="plus"> + </div>
			</div>
		</div>
	);
}

const styleCounterComp = {
	width: '100px',
	maxWidth: '400px',
	margin: '0 auto'
};

const number = {};
const buttons = {};
const minus = {};
const plus = {};
