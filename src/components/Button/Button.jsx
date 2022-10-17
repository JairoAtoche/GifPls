import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getRandom } from '@/services/getRandom';
import './button.scss';
import { DETAIL } from '@/router/path';

const Button = ({ name, children }) => {
	const [id, setId] = useState('');
	const [state, setState] = useState(true);

	useEffect(() => {
		getRandom('random', name).then(item => setId(item.id));
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
