import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getData } from '@/services/getData';
import './button.scss';
import { DETAIL } from '@/router/path';

const Button = ({ name, children }) => {
	const [id, setId] = useState('');
	const [state, setState] = useState(true);

	useEffect(() => {
		getData({ typeEndpoint: 'random', format: 'gifs' }).then(id =>
			setId(id.id)
		);
	}, [state]);

	return (
		<Link
			to={`${DETAIL}/${id}`}
			className='button'
			onClick={() => setState(!state)}>
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
