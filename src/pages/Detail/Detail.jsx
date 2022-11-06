/* eslint-disable no-irregular-whitespace */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Button from './components/Button';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './detail.scss';
import { saveAs } from 'file-saver';
import { useSearchById } from '@/hooks/useSearchById';
import { Helmet } from 'react-helmet';

const Detail = () => {
	const { id } = useParams();
	const { title = '', image = '' } = useSearchById(id);

	const filtro = title.includes(' GIF by ') ? ' GIF by ' : ' Sticker by ';
	const indiceAutor = title.indexOf(filtro);
	const titulo = title.substring(0, indiceAutor) || 'Detalle del GIF';
	const autor = title.substring(indiceAutor + filtro.length);
	const DOWNLOAD = image.substring(0, image.length - 9);

	const download = () => {
		saveAs('image_url', `${DOWNLOAD}.gif`);
	};

	const [refresh, setRefresh] = useState(false);
	let [favoritos, setValue] = useLocalStorage('favoritos', []);
	const handleStorage = () => {
		favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
		if (!favoritos.includes(id)) {
			setValue([...favoritos, id]);
		} else {
			const updateFavorites = favoritos.filter(item => item !== id);
			setValue(updateFavorites);
		}
		setRefresh(!refresh);
	};

	return (
		<>
			<Helmet>
				<title>{titulo}</title>
				<meta name='description' content={`${titulo} by ${autor}`} />
				<meta name='keywords' content={`gifpls, gif, sticker, ${titulo}`} />
			</Helmet>

			<div className='detail'>
				<h1 className='detail__h1'>{titulo}</h1>
				<div className='img__container'>
					<motion.img src={image} alt={titulo} className='img' layoutId={id} />
				</div>
				<div className='detail__autor'>
					<p>Autor: </p>
					<h2 className='detail__h2'>{autor}</h2>
				</div>
				<div className='detail__autor'>
					<p className='detail__p'>Tipo: </p>
					<p className='detail__h2'>{filtro.substring(0, filtro.length - 4)}</p>
				</div>
				<div>
					{favoritos.includes(id) ? (
						<Button
							name='QUITAR DE FAVORITOS'
							func={handleStorage}
							icon={<AiOutlineHeart className='icon__btn' />}
							color='red'
						/>
					) : (
						<Button
							name='AGREGAR A FAVORITOS'
							func={handleStorage}
							icon={<AiFillHeart className='icon__btn' />}
							color='red'
						/>
					)}
				</div>
				<Button
					name='DESCARGAR'
					func={download}
					icon={<FiDownload className='icon__btn' />}
				/>
			</div>
		</>
	);
};

export default Detail;
