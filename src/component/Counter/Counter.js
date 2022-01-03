import { useEffect, useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setInterval(() => setCounter(cnt => cnt + 1), 1000);
	}, [])

	return counter;
}

export default Counter;