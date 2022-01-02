import Coin from "../Coin/Coin"

const CoinList = ({coins}) => {
	return (
		<div className='coin-list'>
			{coins.map((coin) => <Coin key={coin.id} imgUrl={coin.image} price={coin.current_price}/>)}
		</div>
	)
}

export default CoinList;