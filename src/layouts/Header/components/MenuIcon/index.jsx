import React, { useContext } from 'react';
import './menuicon.scss';
import PropTypes from 'prop-types';
import '@/styles/theme.scss';

import { ThemeContext } from '@/context/ThemeContext';
const MenuIcon = ({ handleVisible, visible }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={`menu__icon icon ${visible ? 'icon-close' : ''}`}
			onClick={handleVisible}>
			<div className={`icon__line theme-btn--${theme}`}></div>
			<div className={`icon__line theme-btn--${theme}`}></div>
			<div className={`icon__line theme-btn--${theme}`}></div>
		</div>
	);
};

MenuIcon.propTypes = {
	handleVisible: PropTypes.func,
	visible: PropTypes.string,
};

export default MenuIcon;
