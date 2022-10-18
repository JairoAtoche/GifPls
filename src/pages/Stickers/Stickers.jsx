import React, { useContext, useEffect, useState } from 'react';
import Searcher from '@/components/Searcher/Searcher';
import Section from '@/components/Section/Section';
import SkeletonDefault from '@/components/SkeletonDefault/SkeletonDefault';
import useData from '@/hooks/useData';
import { v4 as uuidv4 } from 'uuid';
import { SearcherContext } from '@/context/SearcherContext';
import { getData } from '@/services/getData';
import Card from '@/components/Card/Card';
import { useLocation } from 'react-router-dom';
import Trending from '@/components/Trending/Trending';

const initialPage = 0;
const Stickers = () => {
	const [search, setSearch] = useState([]);
	const gif = useData('random', 'escribir');
	const trends = useData('trending');
	const location = useLocation();
	const [page, setPage] = useState(initialPage);
	const [loadingNextPage, setLoadingNextPage] = useState(false);
	const { searcher, setSearcher } = useContext(SearcherContext);

	useEffect(() => {
		getData({
			typeEndpoint: 'search',
			word: searcher,
			format: 'stickers',
		}).then(item => setSearch(item));
		if (location.search === '') setSearcher('');
	}, [searcher, location]);

	const handleNextPage = () => {
		setPage(prevPage => prevPage + 1);
	};

	useEffect(() => {
		if (page === initialPage) return;
		setLoadingNextPage(true);
		getData({
			typeEndpoint: 'search',
			word: searcher,
			page,
			format: 'stickers',
		}).then(nextGifs => {
			setSearch(prevGif => prevGif.concat(nextGifs));
			setLoadingNextPage(false);
		});
	}, [searcher, page]);
	return (
		<main>
			<section className='section-intro'>
				<h1>GifPls</h1>
				<p className='section-intro__p'>
					Encuentra los mejores gif y stickers animados para darle diversión y
					transmitir visualmente tus mensajes.
				</p>
				<Searcher />
			</section>
			<Section subtitle='Stickers'>
				<>
					{searcher === '' ? (
						<SkeletonDefault
							subtitle='Aún no tenemos ninguna búsqueda tuya ¿Qué esperas para empezar a buscar?'
							paragraph='Explora y descubre divertidos gif y clips con sonido para animar tus conversaciones'
							source={gif.image}
							alternative={gif.title}
						/>
					) : (
						<div className='container-result'>
							{search.map(el => (
								<Card key={el.id} id={el.id} title={el.title} img={el.image} />
							))}
							<button onClick={handleNextPage} className='btn-nextPage'>
								Cargar más
							</button>
						</div>
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
export default Stickers;
