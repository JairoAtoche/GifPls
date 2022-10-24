import { URL, API_KEY } from '@/services/config';

/**
 * Función que devuelve un objeto con la información aleatorio (id, title and image) de un gif o sticker dependiendo del format(gifs o stickers) y query.
 * @param {'gifs' | 'stickers'} format - tipo de formato de la imagen, solo elegir 'gifs' o 'stickers'
 * @param {string} query - palabra o frase para buscar la imagen aleatoria.
 * @returns {{id: string, title: string, image: string}} Objeto que contiene id, title and image de la imagen (gif o sticker)
 */
export const getRandom = async (format, query = '') => {
	const endpoint = `${URL}/${format}/random?api_key=${API_KEY}&tag=${query}`;
	try {
		const response = await fetch(endpoint);
		const { data } = await response.json();
		const itemInfo = {
			id: data.id,
			title: data.title,
			image: data.images.downsized_large.url,
		};
		return itemInfo;
	} catch (err) {
		console.error(err);
	}
};
