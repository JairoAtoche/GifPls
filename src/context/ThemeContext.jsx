import React, { createContext } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const userPrefersDark =
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = userPrefersDark ? 'dark' : 'light';

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useLocalStorage('theme', initialTheme);

	const handleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	const data = { theme, handleTheme };
	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
	children: PropTypes.element,
};
