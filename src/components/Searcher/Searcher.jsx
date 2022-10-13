import React, { useState, useContext } from 'react';
import './searcher.scss';
import { ThemeContext } from '@/context/ThemeContext';
import '@/styles/theme.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { SearcherContext } from '@/context/SearcherContext';
import { useNavigate } from 'react-router-dom';
const Searcher = () => {
	const { theme } = useContext(ThemeContext);

	const [form, setForm] = useState('');

	const navigate = useNavigate();

	const { setSearcher } = useContext(SearcherContext);

	const handleChange = e => {
		setForm(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		navigate({
			search: `?search=${form}`,
		});
		e.target.reset();
		setSearcher(form);
	};

	return (
		<form className='diva' onSubmit={handleSubmit}>
			<input
				type='text'
				className={`searcher-input theme-input--${theme}`}
				placeholder='Escribe una palabra o frase'
				name='search'
				value={form}
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
