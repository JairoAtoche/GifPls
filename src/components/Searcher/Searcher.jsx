import React, { useContext } from 'react';
import './searcher.scss';
import { ThemeContext } from '@/context/ThemeContext';
import '@/styles/theme.scss';

const Searcher = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className='diva'>
			<input
				className={`searcher-input theme-input--${theme}`}
				placeholder='Escribe una palabra o frase'
			/>
			<button className='searcher-btn'>BUSCAR</button>
		</div>
	);
};

export default Searcher;
