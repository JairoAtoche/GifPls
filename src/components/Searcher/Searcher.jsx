import React, { useState, useContext, useEffect } from 'react';
import './searcher.scss';
import { ThemeContext } from '@/context/ThemeContext';
import '@/styles/theme.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { SearcherContext } from '@/context/SearcherContext';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@/components/Autocomplete/Autocomplete';

const initialState = [];

const Searcher = () => {
	const { theme } = useContext(ThemeContext);

	const [form, setForm] = useState('');

	const navigate = useNavigate();

	const { setSearcher } = useContext(SearcherContext);
	const [suggestion, setSuggestion] = useState(initialState);
	const endpoint = `https://api.giphy.com/v1/gifs/search/tags?api_key=mMtyVB2ByJS9Yfbu9VhdD0g8kPF41j32&q=${form}`;
	useEffect(() => {
		const buscarSugerencia = async () => {
			const response = await fetch(endpoint);
			const res = await response.json();
			const data = await res.data.map(data => data.name);
			return setSuggestion(data);
		};
		buscarSugerencia();
	}, [endpoint]);

	const handleChange = e => {
		setForm(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		navigate({
			search: `?search=${form}`,
		});
		setSearcher(form);
	};

	const handleSuggestion = e => {
		e.preventDefault();
		const id = e.target.value;

		navigate({
			search: `?search=${id.split(' ').join('+')}`,
		});
		setSearcher(e.target.value);
		setForm('');
	};

	return (
		<>
			<form className='diva' onSubmit={handleSubmit} autoComplete='off'>
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
			{suggestion.map(el => (
				<Autocomplete key={el} name={el} handleSuggestion={handleSuggestion} />
			))}
		</>
	);
};

export default Searcher;
