import { useState, useEffect } from 'react';
import getRandom from '@/services/getRandom';

const initialState = {};

export const useRandom = (format, query) => {
	const [item, setItem] = useState(initialState);

	useEffect(() => {
		getRandom(format, query).then(item => setItem(item));
	}, []);

	return item;
};
