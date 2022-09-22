import React, { useContext } from 'react';
import './section.scss';
import PropTypes from 'prop-types';
import '@/styles/theme.scss';
import { ThemeContext } from '@/context/ThemeContext';

const Section = ({ subtitle, children }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<section className='section'>
			<h2 className={`subtitle theme-subtitle--${theme}`}>{subtitle}</h2>
			{children}
		</section>
	);
};

Section.propTypes = {
	subtitle: PropTypes.string,
	children: PropTypes.element,
};

export default Section;
