import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from '@/context/ThemeContext';
import './item-link.scss';

const ItemLink = ({ children, to, name }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<li className='item-list'>
			<Link to={to} className={`item-link item-link--${theme}`}>
				{children}
				{name}
			</Link>
		</li>
	);
};

ItemLink.propTypes = {
	children: PropTypes.element,
	to: PropTypes.string,
	name: PropTypes.string,
};

export default ItemLink;
