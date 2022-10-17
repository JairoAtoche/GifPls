/* eslint-disable no-irregular-whitespace */
import React, { useEffect, useState } from 'react';
import { getId } from '@/services/getId';
import { useParams } from 'react-router-dom';
import Button from './components/Button';
import { AiFillHeart } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import './detail.scss';
import { saveAs } from 'file-saver';
const Detail = () => {
	const { id } = useParams();
	const [detail, setDetail] = useState([]);
	const { title = '', image = '' } = detail;

	const filtro = title.includes(' GIF by ') ? ' GIF by ' : ' Sticker by ';
	const indiceAutor = title.indexOf(filtro);
	const titulo = title.substring(0, indiceAutor) || 'Detalle del GIF';
	const autor = title.substring(indiceAutor + filtro.length);
	const DOWNLOAD = image.substring(0, image.length - 9);

	useEffect(() => {
		getId(id).then(item => setDetail(item));
	}, [id]);

	const addFavorites = () => {};
	const download = () => {
		saveAs('image_url', `${DOWNLOAD}.gif`);
	};
	return (
		<div className='detail'>
			<h1 className='detail__h1'>{titulo}</h1>
			<div className='img__container'>
				<img src={image} alt={titulo} className='img' />
			</div>
			<div className='detail__autor'>
				<p>Autor: </p>
				<h2 className='detail__h2'>{autor}</h2>
			</div>
			<div className='detail__autor'>
				<p className='detail__p'>Tipo: </p>
				<p className='detail__h2'>{filtro.substring(0, filtro.length - 4)}</p>
			</div>

			<Button
				name='AGREGAR A FAVORITOS'
				func={addFavorites}
				icon={<AiFillHeart className='icon__btn' />}
				color='red'
			/>
			<Button
				name='DESCARGAR'
				func={download}
				icon={<FiDownload className='icon__btn' />}
			/>
		</div>
	);
};

export default Detail;
