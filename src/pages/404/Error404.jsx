import React from 'react';
import SkeletonDefault from '@/components/SkeletonDefault/SkeletonDefault';
import { Link } from 'react-router-dom';
import { GIF } from '@/router/path';
import { useRandom } from '@/hooks/useRandom';
import { useRedirect } from '@/hooks/useRedirect';
import { AiFillHome } from 'react-icons/ai';
import { Helmet } from 'react-helmet';
import './error404.scss';

const Error404 = () => {
	const [{ image, title }] = useRandom('gifs', 'error404');
	useRedirect('/error404');

	return (
		<>
			<Helmet>
				<title>ERROR 404</title>
				<meta name='description' content='ERROR - Página no encontrada' />
				<meta name='keywords' content='gifpls, gif, stickers, giphy' />
			</Helmet>
			<div className='error'>
				<SkeletonDefault
					subtitle='ERROR 404'
					paragraph='La página que buscas no existe.'
					source={image}
					alternative={title}
				/>
				<Link to={GIF} className='error__btn'>
					<AiFillHome />
					Regresar a la página inicial
				</Link>
			</div>
		</>
	);
};

export default Error404;
