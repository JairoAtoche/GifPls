import { URL, API_KEY } from '@/services/config';

export const getData = async (typeEndpoint, word) => {
	let endpoint;
	if (typeEndpoint === 'random')
		endpoint = `${URL}/gifs/${typeEndpoint}?api_key=${API_KEY}&q=${word}`;
	if (typeEndpoint === 'search')
		endpoint = `${URL}/gifs/${typeEndpoint}?api_key=${API_KEY}&q=${word}&limit=15`;
	if (typeEndpoint === 'trending')
		endpoint = `${URL}/${typeEndpoint}/searches?api_key=${API_KEY}`;

	const response = await fetch(endpoint);
	const res = await response.json();

	let data = [];
	if (typeEndpoint === 'random') {
		data = await res.data;
		const dataInfo = {
			id: data.id,
			title: data.title,
			image: data.images.downsized_large.url,
		};
		return dataInfo;
	}
	if (typeEndpoint === 'search') {
		data = await res.data.map(data => {
			const dataInfo = {
				id: data.id,
				title: data.title,
				image: data.images.downsized_large.url,
			};
			return dataInfo;
		});
		return data;
	}
	if (typeEndpoint === 'trending') data = await res.data.map(data => data);
	return data;
};
