const Button = ({actTxt, isLoading, onBtnClick}) => {
	return (
		isLoading ?
		<button className='btn btn--primary' disabled onClick={onBtnClick}>
			{actTxt}
			<span className='btn--loading'></span>
		</button>
		:
		<button className='btn btn--primary' onClick={onBtnClick}>{actTxt}</button>
	)
}

export default Button;