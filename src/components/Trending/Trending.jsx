import React, { useContext } from 'react';
import './trending.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SearcherContext } from '@/context/SearcherContext';

const Trending = ({ name }) => {
	const id = name.split(' ').join('+');
	const { setSearcher } = useContext(SearcherContext);

	const handleTrendring = () => {
		window.scrollTo(0, 0);
		setSearcher(id);
	};

	return (
		<h3 className='trending' onClick={handleTrendring}>
			<Link to={`?search=${id}`}>{name}</Link>
		</h3>
	);
};

Trending.propTypes = {
	name: PropTypes.string,
};

export default Trending;
