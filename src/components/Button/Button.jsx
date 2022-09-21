import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ name }) => {
	return <button className='button'>{name}</button>;
};

Button.propTypes = {
	name: PropTypes.string,
};

export default Button;
