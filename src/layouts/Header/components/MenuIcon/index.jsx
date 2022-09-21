import React, { useState } from 'react';
import './menuicon.scss';

const MenuIcon = () => {
	const [close, setClose] = useState(false);

	const handleState = () => {
		close ? setClose(false) : setClose(true);
	};

	return (
		<div
			className={`menu__icon icon ${close ? 'icon-close' : ''}`}
			onClick={handleState}>
			<div className='icon__line'></div>
			<div className='icon__line'></div>
			<div className='icon__line'></div>
		</div>
	);
};

export default MenuIcon;
