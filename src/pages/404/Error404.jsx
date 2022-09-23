import React, { useEffect } from 'react';
import SkeletonDefault from '@/components/SkeletonDefault/SkeletonDefault';
import { useNavigate } from 'react-router-dom';
import { GIF } from '@/router/path';
import useData from '@/hooks/useData';
import Button from '@/components/Button/Button';
import { AiFillHome } from 'react-icons/ai';

const Error404 = () => {
	const navigate = useNavigate();
	const data = useData('error');

	useEffect(() => {
		navigate('/error404');
	}, []);

	return (
		<>
			<SkeletonDefault
				subtitle='ERROR 404'
				paragraph='La página que buscas no existe.'
				source={data.img}
				alternative={data.title}
			/>
			<Button to={GIF} name='Regresar a la página inicial'>
				<AiFillHome />
			</Button>
		</>
	);
};

export default Error404;
