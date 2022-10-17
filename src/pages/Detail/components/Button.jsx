import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';

const Button = ({ name, func, icon, color }) => {
	return (
		<button className={`btn__detail btn__detail--${color}`} onClick={func}>
			{icon}
			{name}
		</button>
	);
};

export default Button;

Button.propTypes = {
	name: PropTypes.string,
	func: PropTypes.func,
	icon: PropTypes.element,
	color: PropTypes.string,
};
