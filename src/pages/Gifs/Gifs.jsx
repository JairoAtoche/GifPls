import React, { useContext, useEffect, useState, useRef } from 'react';
import './gifs.scss';
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
import { motion, useInView } from 'framer-motion';

const initialPage = 0;
const MotionTrending = motion(Trending);

const Gifs = () => {
	const [search, setSearch] = useState([]);
	const gif = useData('random', 'escribir');
	const trends = useData('trending');
	const location = useLocation();
	const [page, setPage] = useState(initialPage);
	const [loadingNextPage, setLoadingNextPage] = useState(false);
	const { searcher, setSearcher } = useContext(SearcherContext);

	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		getData({
			typeEndpoint: 'search',
			word: searcher,
			format: 'gifs',
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
			format: 'gifs',
		}).then(nextGifs => {
			setSearch(prevGif => prevGif.concat(nextGifs));
			setLoadingNextPage(false);
		});
	}, [searcher, page]);
	return (
		<main>
			<section className='section-intro'>
				<motion.h1
					initial={{ opacity: 0, translateY: -10 }}
					animate={{ opacity: 1, translateY: 0 }}
					transition={{ ease: 'easeOut', duration: 0.5, delay: 0.4 }}>
					GifPls
				</motion.h1>
				<motion.p
					className='section-intro__p'
					initial={{ opacity: 0, translateY: -50 }}
					animate={{ opacity: 1, translateY: 0 }}
					transition={{ ease: 'easeOut', duration: 0.5, delay: 0.3 }}>
					Encuentra los mejores gif y stickers animados para darle diversión y
					transmitir visualmente tus mensajes.
				</motion.p>
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
				<div className='trend-container' ref={ref}>
					{trends.map((item, i) => (
						<MotionTrending
							key={uuidv4()}
							name={item}
							initial={{ opacity: 0, translateY: -50 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ ease: 'easeOut', duration: 0.1, delay: i * 0.1 }}
							ref={ref}
						/>
					))}
				</div>
			</Section>
		</main>
	);
};

export default Gifs;
