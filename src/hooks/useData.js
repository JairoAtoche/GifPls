import { useState, useEffect } from 'react';
import { getData } from '@/services/getData';

const useData = name => {
	const [gif, setGif] = useState([]);

	useEffect(() => {
		getData(name).then(data => setGif(data));
	}, []);

	return gif;
};

export default useData;
