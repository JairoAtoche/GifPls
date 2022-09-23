import React, { useContext } from 'react';
import './searcher.scss';
import { ThemeContext } from '@/context/ThemeContext';
import '@/styles/theme.scss';
import { BiSearchAlt } from 'react-icons/bi';

const Searcher = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className='diva'>
			<input
				className={`searcher-input theme-input--${theme}`}
				placeholder='Escribe una palabra o frase'
			/>
			<button className='searcher-btn'>
				<BiSearchAlt className='searcher-icon' />
				BUSCAR
			</button>
		</div>
	);
};

export default Searcher;
