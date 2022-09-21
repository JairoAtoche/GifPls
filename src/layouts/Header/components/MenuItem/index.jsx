import React from 'react';
import './menu-item.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ children, to, name }) => {
	return (
		<li className='menu-item'>
			<NavLink to={to} className='menu-item__link'>
				{children}
				{name}
			</NavLink>
			<hr className='hr' />
		</li>
	);
};

MenuItem.propTypes = {
	children: PropTypes.element,
	to: PropTypes.string,
	name: PropTypes.string,
};

export default MenuItem;
