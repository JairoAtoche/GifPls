import React from 'react';
import { GIF, CLIP, FAVORITOS } from '@/router/path';
import { AiOutlineFileGif, AiFillHeart } from 'react-icons/ai';
import { MdVideoLibrary } from 'react-icons/md';
import MenuItem from '../MenuItem';
import PropTypes from 'prop-types';
import './menuside.scss';

const MenuSide = ({ visible }) => {
	return (
		<ul className={`nav__ul ${visible}`}>
			<MenuItem to={GIF} name='GIF'>
				<AiOutlineFileGif />
			</MenuItem>
			<MenuItem to={CLIP} name='CLIPS'>
				<MdVideoLibrary />
			</MenuItem>
			<MenuItem to={FAVORITOS} name='MIS FAVORITOS'>
				<AiFillHeart />
			</MenuItem>
		</ul>
	);
};

MenuSide.propTypes = {
	visible: PropTypes.string,
};

export default MenuSide;
