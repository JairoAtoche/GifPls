import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './skeleton-default.scss';
import { ThemeContext } from '@/context/ThemeContext';
import '@/styles/theme.scss';

const SkeletonDefault = ({ subtitle, paragraph, source, alternative }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`skeleton-default theme-skeleton-default--${theme}`}>
			<h4 className='skeleton-default__h4'>{subtitle}</h4>
			<p className='skeleton-default__p'>{paragraph}</p>
			<div className='skeleton-default__gif-container'>
				<img
					src={source}
					alt={alternative}
					title={alternative}
					className='skeleton-default__gif'
				/>
			</div>
		</div>
	);
};

SkeletonDefault.propTypes = {
	subtitle: PropTypes.string,
	paragraph: PropTypes.string,
	source: PropTypes.string,
	alternative: PropTypes.string,
};

export default SkeletonDefault;
