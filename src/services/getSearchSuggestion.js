import { URL, API_KEY } from '@/services/config';

/**
 * Función que devuelve una lista de nombres sugeridos basados en el parámetro query.
 * @param {string} query - palabra o frase a buscar
 * @returns {string[]} Arreglo que contiene las palabras o frases sugeridas
 */
export const getSearchSuggestion = async query => {
	const endpoint = `${URL}/gifs/search/tags?api_key=${API_KEY}&q=${query}`;
	try {
		const response = await fetch(endpoint);
		const { data } = await response.json();
		const namesList = await data.map(item => item.name);
		return namesList;
	} catch (err) {
		console.error(err);
	}
};
