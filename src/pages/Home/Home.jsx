import CoinList from "../../component/CoinList/CoinList";
import Button from "../../component/Buton/Button";
import { getAll, getSpecific } from "../../api";
import { useEffect, useState } from "react";
import Empty from "../../component/Empty/Empty";

const Home = () => {
	const [Coins, setCoins] = useState([]);
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
		setCoins(Coins.map(coin => (coin.id === id) ? {...coin, isLoading: true} : coin));
		getSpecific(id)
			.then(resp => setCoins(Coins.map(coin => (coin.id === id) ? resp.data[0] : coin)))
			.catch(console.log);
	}

	useEffect(updateAllCoin, []);

	return (
		<div className='content'>
			<div className='container'>
				<Button isLoading={isLoading} onBtnClick={onUpdateAllClick}>Force Update All</Button>
				{
					Coins.length === 0 ?
						<Empty/> :
						<CoinList coins={Coins} isLoading={isLoading} onCoinClick={onCoinClick}/>
				}
			</div>
		</div>
	)
}
export default Home;