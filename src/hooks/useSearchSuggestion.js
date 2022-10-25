import { useState, useEffect } from 'react';
import { getSearchSuggestion } from '@/services/getSearchSuggestion';

const initialState = [];

/**
 * Custom hook que devuelve una lista de nombres sugeridos basados en el parámetro query.
 * @param {string} query - palabra o frase a buscar
 * @returns {string[]} Arreglo que contiene las palabras o frases sugeridas
 */
export const useSearchSuggestion = query => {
	const [namesList, setNamesList] = useState(initialState);

	useEffect(() => {
		getSearchSuggestion(query).then(names => setNamesList(names));
	}, []);
	return namesList;
};
