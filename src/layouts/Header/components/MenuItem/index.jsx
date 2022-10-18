import React, { useContext } from 'react';
import './menu-item.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '@/context/ThemeContext';
import '@/styles/theme.scss';

const MenuItem = React.forwardRef(
	({ children, to, name, isActive = true }, ref) => {
		const { theme } = useContext(ThemeContext);

		return (
			<li className='menu-item' ref={ref}>
				<NavLink to={to} className={`menu-item__link theme-color--${theme}`}>
					{children}
					{name}
				</NavLink>
				{isActive ? <hr className={`hr theme-border--${theme}`} /> : ''}
			</li>
		);
	}
);
MenuItem.displayName = 'Menu Item';

MenuItem.propTypes = {
	children: PropTypes.element,
	to: PropTypes.string,
	name: PropTypes.string,
	isActive: PropTypes.bool,
};

export default MenuItem;
