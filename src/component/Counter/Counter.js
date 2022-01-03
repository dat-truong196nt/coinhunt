import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { actIncreaseAutoCounter } from "../../redux/actions";

const Counter = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const intervalId = setInterval(() => dispatch(actIncreaseAutoCounter()), 1000);

		return () => clearInterval(intervalId);
	}, [dispatch])

	return useSelector(state => state.onRequestCounter.count);
}

export default Counter;