import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DETAIL } from '@/router/path';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import Swal from 'sweetalert2';
import 'animate.css';
import './card.scss';

const Card = ({ id, title, img }) => {
	const [refresh, setRefresh] = useState(false);
	const filtro = title.includes(' GIF by ') ? ' GIF by ' : ' Sticker by ';
	const indiceAutor = title.indexOf(filtro);
	const titulo = title.substring(0, indiceAutor);

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
		<div className='card'>
			<button className='card__btn card__btn--url' onClick={copyURL}>
				<BsLink45Deg />
			</button>
			<button className='card__btn' onClick={handleStorage}>
				{favoritos.includes(id) ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
			<p className='card__title'>{titulo}</p>
			<Link to={`${DETAIL}/${id}`} className='img-container'>
				<img loading='lazy' src={img} alt={title} className='img' />
			</Link>
		</div>
	);
};

export default Card;

Card.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	img: PropTypes.string,
};
