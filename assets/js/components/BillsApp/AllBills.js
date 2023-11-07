import React, { useState } from 'react';

export default function AllBills() {
	return (
		<section id="AllBills">
			<div className="container">
				<div className="total-bills">
					<div className="text">Total Amount: </div>
					<div className="number">$874</div>
				</div>
				<ul className="bills-list">
					<li className="bill">
						<div className="company">
							<div className="logo">
								<img src="/img/billsapp/starbuckslogo.png" />
							</div>
							<div className="title">Starbucks</div>
						</div>
						<div className="price">-$20.99</div>
					</li>
				</ul>
			</div>
		</section>
	);
}
