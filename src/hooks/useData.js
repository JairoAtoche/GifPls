import { useState, useEffect } from 'react';
import { getData } from '@/services/getData';

const useData = (type, name) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData(type, name).then(data => setData(data));
	}, []);

	return data;
};

export default useData;
