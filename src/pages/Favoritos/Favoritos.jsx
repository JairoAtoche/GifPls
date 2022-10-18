import React, { useEffect, useState } from 'react';
import Section from '@/components/Section/Section';
import FavoriteItem from '@/components/FavoriteItem/FavoriteItem';
import { getFavorites } from '@/services/getFavorites';

const Favoritos = () => {
	let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
	const id = favoritos.join(',');
	const [lista, setLista] = useState([]);
	const [state, setState] = useState(false);

	useEffect(() => {
		getFavorites(id).then(item => setLista(item));
	}, [state]);

	const deleteFavorite = id => {
		console.log('si');
		favoritos = favoritos.filter(item => item !== id);
		localStorage.setItem('favoritos', JSON.stringify(favoritos));
		setState(!state);
	};

	return (
		<main>
			<h1>GifPls</h1>
			<Section subtitle='Lista de favoritos'>
				<div>
					{lista.map(item => (
						<FavoriteItem
							key={item.id}
							title={item.title}
							image={item.image}
							handleDelete={() => deleteFavorite(item.id)}
						/>
					))}
				</div>
			</Section>
		</main>
	);
};

export default Favoritos;
