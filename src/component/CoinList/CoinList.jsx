import Coin from "../Coin/Coin"

const CoinList = ({coins, isLoading}) => {
	return (
		<div className='coin-list'>
			{coins.map((coin) => <Coin key={coin.id} isLoading={isLoading} imgUrl={coin.image} price={coin.current_price}/>)}
		</div>
	)
}

export default CoinList;