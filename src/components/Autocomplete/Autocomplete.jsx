import React, { useContext } from 'react';
import './autocomplete.scss';
import { PropTypes } from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import { ThemeContext } from '@/context/ThemeContext';

const Autocomplete = ({ name, handleSuggestion }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<button
			className={`suggestion ${
				theme === 'dark' ? 'theme-suggestion--dark' : ''
			}`}
			value={name}
			onClick={handleSuggestion}>
			<BiSearchAlt className='suggestion-icon' />
			{name}
		</button>
	);
};

export default Autocomplete;

Autocomplete.propTypes = {
	name: PropTypes.string,
	handleSuggestion: PropTypes.func,
};
