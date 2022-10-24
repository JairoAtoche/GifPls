import { URL, API_KEY } from '@/services/config';

/**
 * Función que devuelve una lista con los términos de búsqueda de tendencia más populares del día.
 * @returns {string[]} Arreglo que contiene los términos de búsqueda de la tendencia del día.
 */
export const getTrends = async () => {
	const endpoint = `${URL}/trending/searches?api_key=${API_KEY}`;
	try {
		const response = await fetch(endpoint);
		const { data } = await response.json();
		const trendingList = await data.map(term => term);
		return trendingList;
	} catch (err) {
		console.error(err);
	}
};
