import CoinList from "../../component/CoinList/CoinList";
import Button from "../../component/Button/Button";
import { getAll, getSpecific } from "../../api";
import { useEffect, useState } from "react";
import Empty from "../../component/Empty/Empty";

const Home = () => {
	const [coins, setCoins] = useState([]);
	const [isLoading, setLoading] = useState(false);

	const updateAllCoin = () => {
		getAll()
			.then (resp => {setCoins(resp.data); setLoading(false)})
			.catch(console.log);
	}

	const onUpdateAllClick = () => {
		setLoading(true);
		updateAllCoin();
	}

	const onCoinClick = (id) => {
		setCoins(coins.map(coin => (coin.id === id) ? {...coin, isLoading: true} : coin));
		getSpecific(id)
			.then(resp => setCoins(coins.map(coin => (coin.id === id) ? resp.data[0] : coin)))
			.catch(err => setCoins(coins.map(coin => (coin.id === id) ? {...coin, isLoading: false} : coin)))
	}

	useEffect(() => {
		const intervalId = setInterval(updateAllCoin, 10000)
		return () => clearInterval(intervalId)
	}, []);

	return (
		<div className='content'>
			<div className='container'>
				<Button isLoading={isLoading} onBtnClick={onUpdateAllClick}>Force Update All</Button>
				{
					coins.length === 0 ?
						<Empty/> :
						<CoinList coins={coins} isLoading={isLoading} onCoinClick={onCoinClick}/>
				}
			</div>
		</div>
	)
}
export default Home;