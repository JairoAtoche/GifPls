import React, { useEffect, useState } from 'react';
import { getFavorites } from '@/services/getFavorites';

const Favoritos = () => {
	const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
	const id = favoritos.join(',');
	const [lista, setLista] = useState([]);

	useEffect(() => {
		getFavorites(id).then(item => setLista(item));
	}, []);

	return (
		<main>
			<h1>Favoritos</h1>
			{lista.map(item => (
				<div key={item.id}>
					<h2>{item.title}</h2>
					<img src={item.image} alt='item.title' />
				</div>
			))}
		</main>
	);
};

export default Favoritos;
