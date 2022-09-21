import React from 'react';
import './menuicon.scss';
import PropTypes from 'prop-types';

const MenuIcon = ({ handleVisible, visible }) => {
	return (
		<div
			className={`menu__icon icon ${visible ? 'icon-close' : ''}`}
			onClick={handleVisible}>
			<div className='icon__line'></div>
			<div className='icon__line'></div>
			<div className='icon__line'></div>
		</div>
	);
};

MenuIcon.propTypes = {
	handleVisible: PropTypes.func,
	visible: PropTypes.string,
};

export default MenuIcon;
