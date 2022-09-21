import React from 'react';
import { GIF, CLIP, FAVORITOS } from '@/router/path';
import { Routes, Route } from 'react-router-dom';
import Gifs from '@/pages/Gifs';
import Clips from '@/pages/Clips';
import Favoritos from '@/pages/Favoritos';
// import Error from '@/pages/Error';
import Header from '@/layouts/Header';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path={GIF} element={<Gifs />} />
				<Route path={CLIP} element={<Clips />} />
				<Route path={FAVORITOS} element={<Favoritos />} />
				{
					// <Route path={ERROR} element={<Error />} />
				}
			</Routes>
		</div>
	);
};

export default App;
