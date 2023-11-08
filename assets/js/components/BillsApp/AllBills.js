import React, { useState } from 'react';

export default function AllBills() {
	const bills = [5, 6, 123, 432, 543, 234, 645, 23, 1234, 235];
	const allbills = bills.map(bill => {
		return (
			<li className="bill" key={bill}>
				<div className="company">
					<div className="logo">
						<img src="/img/billsapp/starbuckslogo.png" />
					</div>
					<div className="title">Starbucks</div>
				</div>
				<div className="price">${bill}.99</div>
			</li>
		);
	});

	return (
		<section id="AllBills">
			<div className="container">
				<div className="total-bills">
					<div className="text">Total Amount: </div>
					<div className="number">$874</div>
				</div>
				<ul className="bills-list">{allbills}</ul>
			</div>
		</section>
	);
}
