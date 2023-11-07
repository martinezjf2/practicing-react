import React, { useState } from 'react';
import Header from './Header';
import AllBills from './AllBills';

export default function BillsApp() {
	const [status, setStatus] = useState('manual');

	return (
		<div id="BillsApp">
			<Header />
			<AllBills />
		</div>
	);
}
