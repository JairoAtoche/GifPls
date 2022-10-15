import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { ThemeContext } from '@/context/ThemeContext';
import './card.scss';
import Swal from 'sweetalert2';
import 'animate.css';

const Card = ({ title, img }) => {
	const { theme } = useContext(ThemeContext);
	// Por ahora el favorito cambia con el tema de color, luego cambio
	const filtro = title.includes(' GIF by ') ? ' GIF by ' : ' Sticker by ';
	const indiceAutor = title.indexOf(filtro);
	const titulo = title.substring(0, indiceAutor);
	const autor = title.substring(indiceAutor + filtro.length);
	let timerInterval;
	const copyURL = () => {
		navigator.clipboard.writeText(img);
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
		<div className='card'>
			<button className='card__btn card__btn--url' onClick={copyURL}>
				<BsLink45Deg />
			</button>
			<button className='card__btn'>
				{theme === 'dark' ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
			<p className='card__title'>{titulo}</p>

			<Link className='img-container'>
				<img src={img} alt={title} className='img' />
			</Link>
		</div>
	);
};

export default Card;

Card.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
};
