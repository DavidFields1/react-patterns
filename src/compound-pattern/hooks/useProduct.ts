import { useState } from 'react';

export const useProduct = () => {
	const [counter, setCounter] = useState(0);

	const increaseCounter = (step: number = 1) => {
		setCounter((prev) => Math.max(prev + step, 0));
	};

	return {
		counter,
		increaseCounter,
	};
};
