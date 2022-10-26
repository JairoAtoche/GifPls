import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './button.scss';
import { DETAIL } from '@/router/path';
import { useRandom } from '@/hooks/useRandom';

const Button = ({ name, children }) => {
	const value = Math.round(Math.random());
	const [{ id }, setRefresh] = useRandom(value === 1 ? 'gifs' : 'stickers');

	return (
		<Link to={`${DETAIL}/${id}`} className='button' onClick={setRefresh}>
			{children}
			{name}
		</Link>
	);
};

Button.propTypes = {
	children: PropTypes.element,
	name: PropTypes.string,
};

export default Button;
