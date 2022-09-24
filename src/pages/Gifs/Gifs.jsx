import React from 'react';
import './gifs.scss';
import Searcher from '@/components/Searcher/Searcher';
import Section from '@/components/Section/Section';
import SkeletonDefault from '@/components/SkeletonDefault/SkeletonDefault';
import useData from '@/hooks/useData';
import Title from '@/components/Title/Title';
import { v4 as uuidv4 } from 'uuid';

const Gifs = () => {
	const gif = useData('random', 'error');
	const trends = useData('trending');

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
					source={gif.image}
					alternative={gif.title}
				/>
			</Section>

			<Section subtitle='Últimas tendencias'></Section>
			{trends.map(item => (
				<h4 key={uuidv4()}>{item}</h4>
			))}
		</main>
	);
};

export default Gifs;
