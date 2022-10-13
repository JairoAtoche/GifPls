import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const SearcherContext = createContext();

const initialState = '';

export const SearcherProvider = ({ children }) => {
	const [searcher, setSearcher] = useState(initialState);

	const data = { searcher, setSearcher };

	return (
		<SearcherContext.Provider value={data}>{children}</SearcherContext.Provider>
	);
};

SearcherProvider.propTypes = {
	children: PropTypes.element,
};
