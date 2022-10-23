import { useState, useEffect } from 'react';
import { getData } from '@/services/getData';

const useData = (type, name, togle) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData({ typeEndpoint: type, word: name, format: togle }).then(data =>
			setData(data)
		);
	}, []);

	return data;
};

export default useData;
