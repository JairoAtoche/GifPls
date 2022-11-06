import { URL, API_KEY } from '@/services/config';

/**
 * Función que devuelve un objeto con la información del gif (title and image) basado en el parámetro id.
 * @param {[string]} id - identificador del gif
 * @returns {{title: string, image: string}} Objeto que contiene el title and image del gif
 */
export const getSearchById = async id => {
	const endpoint = `${URL}/gifs/${id}?api_key=${API_KEY}`;
	try {
		const response = await fetch(endpoint);
		const { data } = await response.json();
		const itemInfo = {
			title: data.title,
			image: data.images.fixed_height.url,
		};
		return itemInfo;
	} catch (err) {
		console.error(err);
	}
};
