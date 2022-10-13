import React, { useContext, useEffect, useState } from 'react';
import './gifs.scss';
import Searcher from '@/components/Searcher/Searcher';
import Section from '@/components/Section/Section';
import SkeletonDefault from '@/components/SkeletonDefault/SkeletonDefault';
import useData from '@/hooks/useData';
import Trending from '@/components/Trending/Trending';
import { v4 as uuidv4 } from 'uuid';
import { SearcherContext } from '@/context/SearcherContext';
import { getData } from '@/services/getData';

const Gifs = () => {
	const [search, setSearch] = useState([]);
	const gif = useData('random', 'escribir');
	const trends = useData('trending');

	const { searcher } = useContext(SearcherContext);
	useEffect(() => {
		getData('search', searcher).then(item => setSearch(item));
	}, [searcher]);

	return (
		<main>
			<section className='section-intro'>
				<h1>GifPls</h1>
				<p className='section-intro__p'>
					Encuentra los mejores gif, stickers animados y clips con sonido para
					darle diversión y transmitir visualmente tus mensajes.
				</p>
				<Searcher />
			</section>
			<Section subtitle='Gif'>
				<>
					{searcher === '' ? (
						<SkeletonDefault
							subtitle='Aún no tenemos ninguna búsqueda tuya ¿Qué esperas para empezar a buscar?'
							paragraph='Explora y descubre divertidos gif y clips con sonido para animar tus conversaciones'
							source={gif.image}
							alternative={gif.title}
						/>
					) : (
						search.map(el => (
							<div key={el.id}>
								<h4>{el.title}</h4>
								<img src={el.image} alt='' />
							</div>
						))
					)}
				</>
			</Section>
			<Section subtitle='Últimas tendencias'>
				<div className='trend-container'>
					{trends.map(item => (
						<Trending key={uuidv4()} name={item} />
					))}
				</div>
			</Section>
		</main>
	);
};

export default Gifs;
