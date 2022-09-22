import React, { useContext } from 'react';
import './gifs.scss';
import '@/styles/theme.scss';
import { ThemeContext } from '@/context/ThemeContext';
import Searcher from '@/components/Searcher/Searcher';
const Gifs = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<main className={`gif theme-page--${theme}`}>
			<section className='section-intro'>
				<h1 className='section-intro__h1'>GIFPls</h1>
				<p className='section-intro__p'>
					Encuentra los mejores gif, stickers animados y clips con sonido para
					darle diversión y transmitir visualmente tus mensajes.
				</p>
				<Searcher />
			</section>
			<section className='section-gif'>
				<h2>Gif</h2>
			</section>
			<section className='section-trend'>
				<h2>Últimas tendencias</h2>
			</section>
		</main>
	);
};

export default Gifs;
