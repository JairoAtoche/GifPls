/**
 * My custom hooks library
 * @module CustomHooks
 */

import { useState, useEffect } from 'react';
import { getSearcher } from '@/services/getSearcher';

const initialState = [];

export const useSearcher = (format, query, page = 0) => {
	const [result, setResult] = useState(initialState);

	useEffect(() => {
		getSearcher(format, query, page).then(data => setResult(data));
	}, []);
	return result;
};
