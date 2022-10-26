import { useState, useEffect } from 'react';
import { getRandom } from '@/services/getRandom';

const initialState = {};

/**
 * Custom hook que devuelve un objeto con la información aleatorio (id, title and image) de un gif o sticker dependiendo del format(gifs o stickers) y query.
 * @param {'gifs' | 'stickers'} format - tipo de formato de la imagen, solo elegir 'gifs' o 'stickers'
 * @param {string} query - palabra o frase para buscar la imagen aleatoria.
 * @returns {[{id: string, title: string, image: string}, function():boolean]} Arreglo que contiene un objeto con propiedades id, title and image de la imagen (gif o sticker) y una función para refrescar el customHook.
 */
export const useRandom = (format, query = '') => {
	const [item, setItem] = useState(initialState);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		getRandom(format, query).then(item => setItem(item));
	}, [refresh]);

	const refreshRandom = () => {
		setRefresh(!refresh);
	};
	return [item, refreshRandom];
};
