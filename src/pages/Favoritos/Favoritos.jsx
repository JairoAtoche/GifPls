import React, { useEffect, useState } from 'react';
import Section from '@/components/Section/Section';
import FavoriteItem from '@/components/FavoriteItem/FavoriteItem';
import { getFavorites } from '@/services/getFavorites';
import { motion } from 'framer-motion';
import './favoritos.scss';

const Favoritos = () => {
	let favoritos = JSON.parse(localStorage.getItem('favoritos'));
	const id = favoritos.join(',');
	const [lista, setLista] = useState([]);
	const [state, setState] = useState(false);

	useEffect(() => {
		getFavorites(id).then(item => setLista(item));
	}, [state]);

	const deleteFavorite = id => {
		favoritos = favoritos.filter(item => item !== id);
		localStorage.setItem('favoritos', JSON.stringify(favoritos));
		setState(!state);
	};

	return (
		<div className='favorito'>
			<motion.h1
				initial={{ opacity: 0, translateY: -50 }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{ ease: 'easeOut', duration: 0.5, delay: 0.3 }}>
				GifPls
			</motion.h1>
			<Section subtitle='Lista de favoritos'>
				<div className='favorito-container'>
					{!lista ? (
						<p>La lista se encuentra vacia 😢</p>
					) : (
						lista.map(item => (
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
	);
};

export default Favoritos;
