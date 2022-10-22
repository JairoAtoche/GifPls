import React, { useEffect } from 'react';
import SkeletonDefault from '@/components/SkeletonDefault/SkeletonDefault';
import { useNavigate, Link } from 'react-router-dom';
import { GIF } from '@/router/path';
import useData from '@/hooks/useData';
import Button from '@/components/Button/Button';
import { AiFillHome } from 'react-icons/ai';
import './error404.scss';

const Error404 = () => {
	const navigate = useNavigate();
	const data = useData('random', 'error');

	useEffect(() => {
		navigate('/error404');
	}, []);

	return (
		<>
			{console.log(data)}
			<SkeletonDefault
				subtitle='ERROR 404'
				paragraph='La página que buscas no existe.'
				source={data.image}
				alternative={data.title}
			/>
			<Link to={GIF} className='error__btn'>
				<AiFillHome />
				Regresar a la página inicial
			</Link>
		</>
	);
};

export default Error404;
