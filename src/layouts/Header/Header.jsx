import React, { useState } from 'react';
import logo from '@/public/logo.ico';
import Button from '@/components/Button/Button';
import './header.scss';
import MenuIcon from './components/MenuIcon';
import MenuSide from './components/MenuSide';
import { NavLink } from 'react-router-dom';
import { GIF } from '@/router/path';

const Header = () => {
	const [close, setClose] = useState(false);

	const handleVisible = () => {
		close ? setClose(false) : setClose(true);
	};

	return (
		<header className='header'>
			<nav className='header__nav nav'>
				<NavLink to={GIF} className='container-logo'>
					<img src={logo} alt='logo' className='container-logo__img' />
				</NavLink>
				<Button name='Random GIF' />
				<MenuIcon
					handleVisible={handleVisible}
					visible={`${close ? 'icon-close' : ''}`}
				/>
				<MenuSide visible={`${close ? 'cerrar' : ''}`} />
			</nav>
		</header>
	);
};

export default Header;
