import { URL, API_KEY } from '@/services/config';

export const getData = async (typeEndpoint, type) => {
	const endpoint = `${URL}/${type.toLowerCase()}s/${typeEndpoint}?api_key=${API_KEY}`;
	const response = await fetch(endpoint);
	const { data } = await response.json();
	const dataInfo = {
		id: data.id,
		title: data.title,
		image: data.images.downsized_large.url,
	};
	return dataInfo;
};
