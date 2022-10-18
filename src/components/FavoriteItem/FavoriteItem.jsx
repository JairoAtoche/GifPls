import React from 'react';
import PropTypes from 'prop-types';
import { BsLink45Deg, BsFillTrashFill } from 'react-icons/bs';
import './favorite-item.scss';
import Swal from 'sweetalert2';
import 'animate.css';

const FavoriteItem = ({ title, image = '', handleDelete }) => {
	const filtro = title.includes(' GIF by ') ? ' GIF by ' : ' Sticker by ';
	const indiceAutor = title.indexOf(filtro);
	const titulo = title.substring(0, indiceAutor) || 'Sin titulo';

	let timerInterval;
	const copyURL = () => {
		navigator.clipboard.writeText(image);
		Swal.fire({
			title: 'Enlace copiado!',
			icon: 'success',
			showClass: {
				popup: 'animate__animated animate__fadeInDown',
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp',
			},
			html: 'Se cerrará automáticamente en <b></b> milisegundos.',
			timer: 2000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
				const b = Swal.getHtmlContainer().querySelector('b');
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft();
				}, 100);
			},
			willClose: () => {
				clearInterval(timerInterval);
			},
		});
	};

	return (
		<div className='favorite'>
			<div className='favorite__img-container'>
				<img src={image} alt={title} className='favorite__img' />
			</div>
			<h2 className='favorite__h2'>{titulo}</h2>
			<BsLink45Deg className='favorite__icon' onClick={copyURL} />
			<BsFillTrashFill className='favorite__icon' onClick={handleDelete} />
		</div>
	);
};

export default FavoriteItem;

FavoriteItem.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	handleDelete: PropTypes.func,
};
