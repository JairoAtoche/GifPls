import { useState, useEffect } from 'react';
import { getFavorites } from '@/services/getFavorites';

const initialState = [];

/**
 * Custom hook que devuelve un arreglo con una lista de objetos con información (id, title, image) de cada gif/sticker favorito.
 * @param {string} ids - conjunto de id's a recuperar
 * @returns {[{id: string, title: string, image: string}]} Arreglo que contiene una lista de objetos (id,title,image).
 */
export const useFavorites = ids => {
	const [favorites, setFavorites] = useState(initialState);
	const [state, setState] = useState(false);

	const refreshFavorites = () => {
		setState(!state);
	};

	useEffect(() => {
		getFavorites(ids).then(data => setFavorites(data));
	}, [state]);

	return [favorites, refreshFavorites];
};
