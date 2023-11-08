import React, { useState } from 'react';
import Header from './Header';
import AllBills from './AllBills';
import FloatingMenu from './FloatingMenu';
import AddBill from './AddBill';

export default function BillsApp() {
	const [status, setStatus] = useState('manual');
	const [active, setActive] = useState(false);

	function addActive(event) {
		setActive(active => !active);
	}

	return (
		<div id="BillsApp">
			<Header />
			<AllBills />
			<AddBill active={active} />
			<div className="content-background"></div>
			<FloatingMenu onActive={addActive} />
		</div>
	);
}
