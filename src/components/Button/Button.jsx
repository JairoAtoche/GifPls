import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = ({ name, to, children }) => {
	return (
		<Link to={to} className='button'>
			{children}
			{name}
		</Link>
	);
};

Button.propTypes = {
	children: PropTypes.element,
	to: PropTypes.string,
	name: PropTypes.string,
};

export default Button;
