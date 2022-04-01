import { useState } from 'react';

export const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h2>{counter}</h2>
			<button type="button" onClick={() => setCounter(counter + 1)}>
				Increment + 1
			</button>
		</div>
	);
};
