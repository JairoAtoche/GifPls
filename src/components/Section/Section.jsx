import React, { useContext, useRef } from 'react';
import './section.scss';
import PropTypes from 'prop-types';
import '@/styles/theme.scss';
import { ThemeContext } from '@/context/ThemeContext';
import { motion, useInView } from 'framer-motion';

const Section = ({ subtitle, children }) => {
	const { theme } = useContext(ThemeContext);

	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<motion.section
			className='section'
			ref={ref}
			initial={{ opacity: 0, translateX: -500 }}
			animate={{ opacity: 1, translateX: 0 }}
			transition={{ ease: 'easeOut', duration: 0.5, delay: 0.3 }}>
			<h2 className={`subtitle theme-subtitle--${theme}`}>{subtitle}</h2>
			{children}
		</motion.section>
	);
};

Section.propTypes = {
	subtitle: PropTypes.string,
	children: PropTypes.element,
};

export default Section;
