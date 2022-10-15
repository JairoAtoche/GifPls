import React, { useContext } from 'react';
import { GIF, STICKER, CLIP, FAVORITOS } from '@/router/path';
import { AiOutlineFileGif, AiFillHeart } from 'react-icons/ai';
import { MdVideoLibrary } from 'react-icons/md';
import { BiSticker } from 'react-icons/bi';
import MenuItem from '../MenuItem';
import PropTypes from 'prop-types';
import './menuside.scss';
import { ThemeContext } from '@/context/ThemeContext';
import ThemeButton from '../ThemeButton';

const MenuSide = ({ visible }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<ul className={`nav__ul ${visible} theme--bg-${theme}`}>
			<MenuItem to={GIF} name='GIF'>
				<AiOutlineFileGif />
			</MenuItem>
			<MenuItem to={STICKER} name='STICKERS'>
				<BiSticker />
			</MenuItem>
			<MenuItem to={FAVORITOS} name='MIS FAVORITOS'>
				<AiFillHeart />
			</MenuItem>
			<ThemeButton />
		</ul>
	);
};

MenuSide.propTypes = {
	visible: PropTypes.string,
};

export default MenuSide;
