import { URL, API_KEY } from '@/services/config';

export const getSearch = async tag => {
	try {
		const response = await fetch(
			`${URL}/gifs/search/tags?api_key=${API_KEY}&q=${tag}`
		);
		const res = await response.json();
		const data = await res.data.map(data => data.name);
		return data;
	} catch (err) {
		console.error(err);
	}
};
