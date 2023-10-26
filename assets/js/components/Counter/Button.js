import React, { useState } from 'react';

export default function Button({
	action,
	text,
	hoverColor,
	backgroundColor,
	fontColor,
	handleClick
}) {
	const [hover, setHover] = useState(false);

	const styleButton = {
		width: '50%',
		border: '3px solid black',
		padding: '20px',
		fontSize: '2rem',
		fontWeight: '900',
		textAlign: 'center',
		cursor: 'pointer',
		color: hover && fontColor,
		background: hover ? hoverColor : backgroundColor,
		transition: 'all .6s ease-in-out'
	};

	const toggleHover = () => {
		setHover(hover => !hover);
	};

	return (
		<div
			className={action}
			style={styleButton}
			value={hover}
			onMouseEnter={toggleHover}
			onClick={handleClick}
		>
			{text}
		</div>
	);
}
