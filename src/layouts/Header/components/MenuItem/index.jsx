import React, { useContext } from 'react';
import './menu-item.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '@/context/ThemeContext';
import '@/styles/theme.scss';
const MenuItem = ({ children, to, name }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<li className='menu-item'>
			<NavLink to={to} className={`menu-item__link theme-color--${theme}`}>
				{children}
				{name}
			</NavLink>
			<hr className={`hr theme-border--${theme}`} />
		</li>
	);
};

MenuItem.propTypes = {
	children: PropTypes.element,
	to: PropTypes.string,
	name: PropTypes.string,
};

export default MenuItem;
