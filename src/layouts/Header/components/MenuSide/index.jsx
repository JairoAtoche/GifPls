import React, { useContext } from 'react';
import { GIF, CLIP, FAVORITOS } from '@/router/path';
import { AiOutlineFileGif, AiFillHeart } from 'react-icons/ai';
import { MdVideoLibrary } from 'react-icons/md';
import MenuItem from '../MenuItem';
import PropTypes from 'prop-types';
import './menuside.scss';
import { ThemeContext } from '@/context/ThemeContext';
import ThemeButton from '../ThemeButton';

const MenuSide = ({ visible }) => {
	const { theme, handleTheme } = useContext(ThemeContext);

	return (
		<ul className={`nav__ul ${visible} theme--bg-${theme}`}>
			<MenuItem to={GIF} name='GIF'>
				<AiOutlineFileGif />
			</MenuItem>
			<MenuItem to={CLIP} name='CLIPS'>
				<MdVideoLibrary />
			</MenuItem>
			<MenuItem to={FAVORITOS} name='MIS FAVORITOS'>
				<AiFillHeart />
			</MenuItem>
			<button onClick={handleTheme}>CAMBIAR TEMAS</button>
			<ThemeButton />
		</ul>
	);
};

MenuSide.propTypes = {
	visible: PropTypes.string,
};

export default MenuSide;
