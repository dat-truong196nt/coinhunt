import Button from "../Buton/Button";

const Coin = ({imgUrl='https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png', price='$0', isLoading}) => (
	<div className='coin'>
		<div className='coin-info'>
			<img className='coin-info__image' src={imgUrl} alt='coin'></img>
			<div className='coin-info__price'>${price}</div>
		</div>
		<div className='coin-action px-30 py-10'>
			<Button isLoading={isLoading}> Force Update</Button>
		</div>
	</div>
)

export default Coin;