import { useState, useEffect } from 'react';
import { getSearchById } from '@/services/getSearchById';

const initialState = {};

/**
 * Custom hook que devuelve un objeto con la información del gif (title and image) basado en el parámetro id.
 * @param {[string]} id - identificador del gif
 * @returns {{title: string, image: string}} Objeto que contiene el title and image del gif
 */
export const useSearchById = id => {
	const [gif, setGif] = useState(initialState);

	useEffect(() => {
		getSearchById(id).then(gif => setGif(gif));
	}, [id]);

	return gif;
};
