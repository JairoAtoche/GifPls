import React, { useContext, useEffect, useState } from 'react';
import './gifs.scss';
import '@/styles/theme.scss';
import { ThemeContext } from '@/context/ThemeContext';
import Searcher from '@/components/Searcher/Searcher';
import Section from '@/components/Section/Section';
import SkeletonDefault from '@/components/SkeletonDefault/SkeletonDefault';
import { getData } from '@/services/getData';

const Gifs = () => {
	const [gif, setGif] = useState([]);

	useEffect(() => {
		getData('typing').then(gif => setGif(gif));
	}, []);

	/*
	 */

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
			<Section subtitle='Gif'>
				<SkeletonDefault
					subtitle='Aún no tenemos ninguna búsqueda tuya ¿Qué esperas para empezar a buscar?'
					paragraph='Explora y descubre divertidos gif y clips con sonido para animar tus conversaciones'
					source={gif.data}
					alternative={gif.title}
				/>
			</Section>
			<Section subtitle='Últimas tendencias'></Section>
		</main>
	);
};

export default Gifs;
