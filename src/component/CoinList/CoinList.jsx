import Coin from "../Coin/Coin"

const CoinList = ({coins, isLoading}) => {
	return (
		<div className='coin-list'>
			{coins.map((coin) =>
			<Coin
				key={coin.id}
				coin={{url: coin.image, price: coin.current_price}}
				isLoading={isLoading}
			/>)}
		</div>
	)
}

export default CoinList;