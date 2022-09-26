import React, { useContext } from 'react';
import './searcher.scss';
import { ThemeContext } from '@/context/ThemeContext';
import '@/styles/theme.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { SearchContext } from '@/context/SearchContext';
import useData from '@/hooks/useData';

const Searcher = () => {
	const { theme } = useContext(ThemeContext);

	const { search, handleSearch } = useContext(SearchContext);

	const handleChange = e => {
		handleSearch(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	const searchi = useData('search', search);
	console.log(searchi);
	return (
		<form className='diva' onSubmit={handleSubmit}>
			<input
				type='text'
				className={`searcher-input theme-input--${theme}`}
				placeholder='Escribe una palabra o frase'
				value={search}
				onChange={handleChange}
			/>
			<button type='submit' className='searcher-btn'>
				<BiSearchAlt className='searcher-icon' />
				BUSCAR
			</button>
		</form>
	);
};

export default Searcher;
