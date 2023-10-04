import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function App() {
	const [name, setName] = useState('Jeffrey');
	return (
		<div className="container">
			<h1>{name}</h1>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
