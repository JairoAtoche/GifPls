import { useState, useEffect } from 'react';
import { getData } from '@/services/getData';

const useData = name => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData(name).then(data => setData(data));
	}, []);

	return data;
};

export default useData;
