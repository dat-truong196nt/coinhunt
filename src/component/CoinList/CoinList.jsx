import Coin from "../Coin/Coin"

const CoinList = ({coins, isLoading, onCoinClick}) => {
	return (
		<div className='coin-list'>
			{coins.map((coin) =>
			<Coin
				key={coin.id}
				coin={{url: coin.image, price: coin.current_price, id: coin.id}}
				isLoading={isLoading || coin.isLoading}
				onBtnClick={onCoinClick}
			/>)}
		</div>
	)
}

export default CoinList;