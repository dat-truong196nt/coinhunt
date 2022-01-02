const Button = ({isLoading, onBtnClick, children}) => {
	return (
		isLoading ?
		<button className='btn btn--primary' disabled onClick={onBtnClick}>
			<span>{children}</span>
			<span className='btn--loading'></span>
		</button>
		:
		<button className='btn btn--primary' onClick={onBtnClick}>
			<span>{children}</span>
		</button>
	)
}

export default Button;