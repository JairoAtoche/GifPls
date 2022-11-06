import { URL, API_KEY } from '@/services/config';

/**
 * Función que retorna un arreglo que contiene una lista de objetos con información (id, title, image) de cada gif/sticker favorito.
 * @param {string} ids - conjunto de id's a recuperar
 * @returns {[{id: string, title: string, image: string}]} Arreglo que contiene una lista de objetos (id,title,image).
 */
export const getFavorites = async ids => {
	const endpoint = `${URL}/gifs?api_key=${API_KEY}&ids=${ids}`;
	try {
		if (!ids) return '';
		const response = await fetch(endpoint);
		const { data } = await response.json();
		const favoritesList = await data.map(data => {
			const itemInfo = {
				id: data.id,
				title: data.title,
				image: data.images.fixed_height.url,
			};
			return itemInfo;
		});
		return favoritesList;
	} catch (err) {
		console.error(err);
	}
};
