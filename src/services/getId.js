import { URL, API_KEY } from '@/services/config';

export const getId = async id => {
	try {
		const response = await fetch(`${URL}/gifs/${id}?api_key=${API_KEY}`);
		const { data } = await response.json();
		const dataInfo = {
			title: data.title,
			image: data.images.downsized_large.url,
		};
		return dataInfo;
	} catch (err) {
		console.error(err);
	}
};
