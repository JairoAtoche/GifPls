import React, { useContext } from 'react';
import ItemLink from './components/ItemLink/ItemLink';
import { AiOutlineFileGif, AiFillHeart } from 'react-icons/ai';
import { MdVideoLibrary } from 'react-icons/md';
import { BiSticker } from 'react-icons/bi';
import { GIF, STICKER, CLIP, FAVORITOS } from '@/router/path';
import { ThemeContext } from '@/context/ThemeContext';
import './footer.scss';
import '@/styles/theme.scss';

const Footer = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<footer className={`theme-footer--${theme}`}>
			<div className='footer__container'>
				<div className='footer__empresa'>
					<h4>GIFPls</h4>
					<p className='footer__p'>
						GIFPls es un sitio web donde encontrarás los mejores gif y stickers
						animados. Utilizamos Giphy SDK y API para integrar su biblioteca de
						de videos y gif más grandes del mundo.
					</p>
				</div>
				<div className='explora'>
					<h4>Explora</h4>
					<ul>
						<ItemLink to={GIF} name='Gif'>
							<AiOutlineFileGif />
						</ItemLink>
						<ItemLink to={STICKER} name='Sticker'>
							<BiSticker />
						</ItemLink>
						<ItemLink to={FAVORITOS} name='Mis favoritos'>
							<AiFillHeart />
						</ItemLink>
					</ul>
				</div>
			</div>
			<p className='footer__copy'>
				Desarrollado con 💜 por {}
				<a
					href='https://github.com/JairoAtoche'
					target='_blank'
					rel='noreferrer'
					className={`footer__network theme-color--${theme}`}>
					@JairoAtoche
				</a>
			</p>
		</footer>
	);
};

export default Footer;
