import React from 'react';
import logo from '@/public/logo.ico';
import Button from '@/components/Button/Button';
import { AiOutlineFileGif, AiFillHeart } from 'react-icons/ai';
import { MdVideoLibrary } from 'react-icons/md';
import './header.scss';
import MenuIcon from './components/MenuIcon';

const Header = () => {
	return (
		<header className='header'>
			<nav className='header__nav nav'>
				<div className='container-logo'>
					<img src={logo} alt='logo' className='container-logo__img' />
				</div>
				<Button name='Random GIF' />
				<MenuIcon />
				<ul className='nav__ul'>
					<li className='nav__li'>
						<a href='' className='nav__link'>
							<AiOutlineFileGif />
							GIF
						</a>
					</li>
					<li className='nav__li'>
						<a href=''>
							<MdVideoLibrary />
							CLIPS
						</a>
					</li>
					<li className='nav__li'>
						<a href=''>
							<AiFillHeart />
							MIS FAVORITOS
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
