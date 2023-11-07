import React, { useState } from 'react';

export default function FloatingMenu() {
	return (
		<nav id="FloatingMenu">
			<div className="link">
				<div className="icon">
					<i class="far fa-credit-card" />
				</div>
				<div className="text">Spend</div>
			</div>

			<div className="link">
				<div className="icon">
					<i class="fas fa-piggy-bank" />
				</div>
				<div className="text">Save</div>
			</div>

			<div className="link">
				<div className="icon">
					<i class="fas fa-exchange-alt" />
				</div>
				<div className="text">Transfer</div>
			</div>

			<div className="link">
				<div className="icon">
					<i class="fas fa-cogs" />
				</div>
				<div className="text">Settings</div>
			</div>

			<div className="link">
				<div className="add-button">
					<div className="icon">
						<i class="fas fa-plus" />
					</div>
				</div>
			</div>
		</nav>
	);
}
