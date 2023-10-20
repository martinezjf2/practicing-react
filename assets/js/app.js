import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter/Counter';

export default function App() {
	const [name, setName] = useState('Jeffrey');

	return (
		<div className="container">
			<h1>{name}</h1>
			<Counter />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
