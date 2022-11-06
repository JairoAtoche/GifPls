import React from 'react';
import Section from '@/components/Section/Section';
import FavoriteItem from '@/components/FavoriteItem/FavoriteItem';
import { useFavorites } from '@/hooks/useFavorites';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './favoritos.scss';

const Favoritos = () => {
	const [listFavorites, setListFavorites] = useLocalStorage('favoritos', []);
	const id = listFavorites.join(',');

	const [favorites, refreshFavorites] = useFavorites(id);

	const deleteFavorite = id => {
		const updateFavoritos = listFavorites.filter(item => item !== id);
		setListFavorites(updateFavoritos);
		refreshFavorites();
	};

	return (
		<>
			<Helmet>
				<title>Mis favoritos</title>
				<meta
					name='description'
					content='Guarda los gifs y stickers que te gusten para tener un acceso más rápido a estos.'
				/>
				<meta
					name='keywords'
					content='gifpls, gif, stickers, trending gif, giphy'
				/>
			</Helmet>

			<div className='favorito'>
				<motion.h1
					initial={{ opacity: 0, translateY: -50 }}
					animate={{ opacity: 1, translateY: 0 }}
					transition={{ ease: 'easeOut', duration: 0.5, delay: 0.3 }}>
					GifPls
				</motion.h1>
				<Section subtitle='Lista de favoritos'>
					<div className='favorito-container'>
						{!favorites ? (
							<p>La lista se encuentra vacia 😢</p>
						) : (
							favorites.map(item => (
								<FavoriteItem
									key={item.id}
									title={item.title}
									image={item.image}
									handleDelete={() => deleteFavorite(item.id)}
								/>
							))
						)}
					</div>
				</Section>
			</div>
		</>
	);
};

export default Favoritos;
