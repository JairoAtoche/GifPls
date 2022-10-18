import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './theme-button.scss';
import { ThemeContext } from '@/context/ThemeContext';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeButton = React.forwardRef((props, ref) => {
	const { theme, handleTheme } = useContext(ThemeContext);

	return (
		<div className={`switch switch-${theme}`} onClick={handleTheme} ref={ref}>
			<motion.div
				className={`handle handle-${theme}`}
				layout
				transition={spring}>
				{theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
			</motion.div>
			<p className={`text text-${theme}`}>{theme}</p>
		</div>
	);
});
ThemeButton.displayName = 'Theme button';

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
};
export default ThemeButton;
