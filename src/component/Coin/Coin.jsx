import Button from "../Buton/Button";

const Coin = ({coin, isLoading}) => (
	<div className='coin'>
		<div className='coin-info'>
			<img className='coin-info__image' src={coin.url} alt='coin'></img>
			<div className='coin-info__price'>${coin.price}</div>
		</div>
		<div className='coin-action'>
			<Button isLoading={isLoading}> Force Update</Button>
		</div>
	</div>
)

export default Coin;