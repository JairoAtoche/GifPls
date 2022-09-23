import { URL, API_KEY } from '@/services/config';

export const getData = async word => {
	const response = await fetch(
		`${URL}/gifs/random?api_key=${API_KEY}&tag=${word}`
	);
	const res = await response.json();
	const { id, title, images } = await res.data;
	const data = await images.downsized_large.url;
	console.log(`${URL}/gifs/random?api_key=${API_KEY}&tag=${word}`);
	console.log(id, title, data);
	const resp = { id, title, data };
	return resp;
};
