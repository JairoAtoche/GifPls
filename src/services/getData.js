import { URL, API_KEY } from '@/services/config';

export const getData = async word => {
	const response = await fetch(
		`${URL}/gifs/random?api_key=${API_KEY}&tag=${word === '' ? word : ''}`
	);
	const res = await response.json();
	const { id, title, images } = await res.data;
	const img = await images.downsized_large.url;
	console.log(`${URL}/gifs/random?api_key=${API_KEY}&tag=${word}`);
	console.log(id, title, img);
	const resp = { id, title, img };
	return resp;
};
