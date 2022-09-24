import React, { useEffect, useState } from 'react';
import './gifs.scss';
import Searcher from '@/components/Searcher/Searcher';
import Section from '@/components/Section/Section';
import SkeletonDefault from '@/components/SkeletonDefault/SkeletonDefault';
import { getData } from '@/services/getData';
import Title from '@/components/Title/Title';

const Gifs = () => {
	const [gif, setGif] = useState([]);

	useEffect(() => {
		getData('typing').then(gif => setGif(gif));
	}, []);

	/*
	 */

	return (
		<main>
			<section className='section-intro'>
				<Title />
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
					source={gif.img}
					alternative={gif.title}
				/>
			</Section>
			<Section subtitle='Últimas tendencias'></Section>
		</main>
	);
};

export default Gifs;
