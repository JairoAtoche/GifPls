import { useState, useEffect } from 'react';
import { getTrends } from '@/services/getTrends';

const initialState = [];

/**
 * Custom hook que devuelve un arreglo con los términos de búsqueda de la tendencia del día.
 * @returns {string[]} Arreglo que contiene los términos de búsqueda de la tendencia del día.
 */
export const useTrends = () => {
	const [trends, setTrends] = useState(initialState);

	useEffect(() => {
		getTrends().then(term => setTrends(term));
	}, []);
	return trends;
};
