import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter/Counter';
import Immutable from './components/Immutable/Immutable';
import BillsApp from './components/BillsApp/BillsApp';

export default function App() {
	const [name, setName] = useState('Jeffrey');

	return (
		<div className="container">
			{/* <h1>{name}</h1> */}
			{/* <Counter status="manual" /> */}
			<BillsApp />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
