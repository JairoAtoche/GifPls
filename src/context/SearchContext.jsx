import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const SearchContext = createContext();

const initialState = [];

export const SearchProvider = ({ children }) => {
	const [search, setSearch] = useState(initialState);

	const handleSearch = newValue => {
		setSearch(newValue);
	};

	const data = { search, handleSearch };

	return (
		<SearchContext.Provider value={data}>{children}</SearchContext.Provider>
	);
};

SearchProvider.propTypes = {
	children: PropTypes.element,
};
