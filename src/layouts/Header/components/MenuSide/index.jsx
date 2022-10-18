import React, { useContext } from 'react';
import { GIF, STICKER, FAVORITOS } from '@/router/path';
import { AiOutlineFileGif, AiFillHeart } from 'react-icons/ai';
import { BiSticker } from 'react-icons/bi';
import MenuItem from '../MenuItem';
import PropTypes from 'prop-types';
import './menuside.scss';
import { ThemeContext } from '@/context/ThemeContext';
import ThemeButton from '../ThemeButton';
import { motion, AnimatePresence } from 'framer-motion';

const MotionMenuItem = motion(MenuItem);
const MotionThemeButton = motion(ThemeButton);

const initial = { opacity: 0, translateX: 500 };
const animate = { opacity: 1, translateX: 0 };
const delay = 0.3;

const MenuSide = ({ visible }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<ul className={`nav__ul ${visible} theme--bg-${theme}`}>
			<AnimatePresence>
				{!visible && (
					<>
						<MotionMenuItem
							initial={initial}
							animate={animate}
							transition={{ ease: 'easeOut', duration: 0.3, delay }}
							to={GIF}
							name='GIF'>
							<AiOutlineFileGif />
						</MotionMenuItem>
						<MotionMenuItem
							to={STICKER}
							name='STICKERS'
							initial={initial}
							animate={animate}
							transition={{ ease: 'easeOut', duration: 0.3, delay: delay * 2 }}>
							<BiSticker />
						</MotionMenuItem>
						<MotionMenuItem
							to={FAVORITOS}
							name='MIS FAVORITOS'
							initial={initial}
							animate={animate}
							transition={{ ease: 'easeOut', duration: 0.3, delay: delay * 3 }}>
							<AiFillHeart />
						</MotionMenuItem>
						<MotionThemeButton
							initial={initial}
							animate={animate}
							transition={{ ease: 'easeOut', duration: 0.3, delay: delay * 4 }}
						/>
					</>
				)}
			</AnimatePresence>
		</ul>
	);
};

MenuSide.propTypes = {
	visible: PropTypes.string,
};

export default MenuSide;
