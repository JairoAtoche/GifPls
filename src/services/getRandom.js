import { URL, API_KEY } from '@/services/config';

const typeFormat = /** @type {const} */ ([
	{ format: 'gifs' },
	{ format: 'stickers' },
]);

/**
 * Función que retorna un objeto con la información aleatorio (id, title and image) de un gif o sticker dependiendo del format(gifs o stickers) y query.
 * @param {typeof typeFormat[number]['format']} format - tipo de formato, solo elegir 'gifs' o 'stickers'
 * @param {String} query - palabra o frase para buscar la imagen aleatoria.
 * @returns {Object} Objeto que contiene id, title and image de la imagen (gif o sticker)
 */
const getRandom = async (format, query) => {
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

export default getRandom;
