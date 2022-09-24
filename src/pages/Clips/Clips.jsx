import React from 'react';
import Section from '@/components/Section/Section';
import Trending from '@/components/Trending/Trending';
import useData from '@/hooks/useData';
import { v4 as uuidv4 } from 'uuid';

const Clips = () => {
	const trends = useData('trending');
	return (
		<>
			<h1>Clips</h1>
			<Section subtitle='Últimas tendencias'>
				<div className='trend-container'>
					{trends.map(item => (
						<Trending key={uuidv4()} name={item} />
					))}
				</div>
			</Section>
		</>
	);
};

export default Clips;
