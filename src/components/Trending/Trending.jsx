import React from 'react';
import './trending.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GIF, CLIP } from '@/router/path';

const Trending = ({ name }) => {
	const id = name.split(' ').join('+');
	return (
		<h3 className='trending'>
			<Link to={id}>{name}</Link>
		</h3>
	);
};

Trending.propTypes = {
	name: PropTypes.string,
};

export default Trending;
