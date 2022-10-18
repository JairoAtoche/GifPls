import React, { useState, useContext, useEffect } from 'react';
import './searcher.scss';
import { ThemeContext } from '@/context/ThemeContext';
import '@/styles/theme.scss';
import { BiSearchAlt } from 'react-icons/bi';
import { SearcherContext } from '@/context/SearcherContext';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@/components/Autocomplete/Autocomplete';
import { motion } from 'framer-motion';
import { getSearch } from '@/services/getSearch';

const initialState = [];

const Searcher = () => {
	const { theme } = useContext(ThemeContext);

	const [form, setForm] = useState('');

	const navigate = useNavigate();

	const { setSearcher } = useContext(SearcherContext);
	const [suggestion, setSuggestion] = useState(initialState);

	useEffect(() => {
		getSearch(form).then(item => setSuggestion(item));
	}, [form]);

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
			<motion.form
				className='diva'
				onSubmit={handleSubmit}
				autoComplete='off'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5, delay: 0.6 }}>
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
			</motion.form>
			{suggestion.map(el => (
				<Autocomplete key={el} name={el} handleSuggestion={handleSuggestion} />
			))}
		</>
	);
};

export default Searcher;
