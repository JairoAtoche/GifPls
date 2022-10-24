import { useState, useEffect } from 'react';
import { getRandom } from '@/services/getRandom';
// eslint-disable-next-line no-unused-vars
import { TYPE_FORMAT } from '@/services/config';

const initialState = {};

/**
 * Custom hook que retorna un objeto con la información aleatorio (id, title and image) de un gif o sticker dependiendo del format(gifs o stickers) y query.
 * @param {typeof TYPE_FORMAT[number]['format']} format - tipo de formato, solo elegir 'gifs' o 'stickers'
 * @param {String} query - palabra o frase para buscar la imagen aleatoria.
 * @returns {Object} Objeto que contiene id, title and image de la imagen (gif o sticker)
 */
export const useRandom = (format, query) => {
	const [item, setItem] = useState(initialState);

	useEffect(() => {
		getRandom(format, query).then(item => setItem(item));
	}, []);
	return item;
};
