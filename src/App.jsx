import React, { useContext } from 'react';
import { GIF, FAVORITOS, STICKER, DETAIL } from '@/router/path';
import { Routes, Route } from 'react-router-dom';
import Gifs from '@/pages/Gifs';
import Stickers from '@/pages/Stickers';
import Favoritos from '@/pages/Favoritos';
import Detail from '@/pages/Detail';
import Error404 from '@/pages/404/Error404';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import '@/styles/theme.scss';
import { ThemeContext } from '@/context/ThemeContext';

const App = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className='App'>
			<Header />
			<main className={`gif theme-page--${theme}`}>
				<Routes>
					<Route path={GIF} element={<Gifs />} />
					<Route path={STICKER} element={<Stickers />} />
					<Route path={FAVORITOS} element={<Favoritos />} />
					<Route path={`${DETAIL}/:id`} element={<Detail />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
