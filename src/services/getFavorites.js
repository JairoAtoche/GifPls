import { URL, API_KEY } from '@/services/config';

export const getFavorites = async id => {
	const response = await fetch(`${URL}/gifs?api_key=${API_KEY}&ids=${id}`);
	const res = await response.json();
	const data = await res.data.map(data => {
		const dataInfo = {
			id: data.id,
			title: data.title,
			image: data.images.downsized_large.url,
		};
		return dataInfo;
	});
	return data;
};
