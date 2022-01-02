import CoinList from "../../component/CoinList/CoinList";
import { getAll, getSpecific } from "../../api";
import { useEffect, useState } from "react";

const Home = () => {
	const [Coins, setCoins] = useState([]);

	useEffect(() => {
		getAll()
			.then (resp => setCoins(resp.data))
			.catch(console.log);
	}, [])

	getSpecific('bitcoin');
	// .catch(err => console.log(err))
		// .then (resp => console.log(resp));

	return (
		<div className='content'>
			<div className='container'>
				<button className='btn btn--primary'> Force Update All</button>
				<CoinList coins={Coins}/>
			</div>
		</div>
	)
}
export default Home;