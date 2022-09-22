import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const initialState = 'light';

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(initialState);

	// optional function
	const handleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};
	// Almacena los datos que se compartiran
	const data = { theme, handleTheme };

	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
	children: PropTypes.element,
};
