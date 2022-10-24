import { URL, API_KEY } from '@/services/config';

const limit = 15;
/**
 * Función
 * @param {'gifs' | 'stickers'} format - tipo de formato de la imagen, solo elegir 'gifs' o 'stickers'
 * @param {string} query -
 * @param {number} page -
 * @returns {[{id: string, title: string, image: string}]} Arreglo de objetos que contiene id, title and image de la imagen (gif o sticker)
 */
export const getSearcher = async (format, query, page = 0) => {
	try {
		const endpoint = `${URL}/${format}/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${
			page * limit
		}`;
		const response = await fetch(endpoint);
		const { data } = await response.json();
		const resultList = await data.map(data => {
			const itemInfo = {
				id: data.id,
				title: data.title,
				image: data.images.downsized_large.url,
			};
			return itemInfo;
		});
		return resultList;
	} catch (err) {
		console.error(err);
	}
};
