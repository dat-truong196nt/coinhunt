const Header = ({counter = 0}) => {
	return (
		<div className='header'>
			<div className='container'>
				<div className='btn btn--primary'>Home</div>
				<div className='btn btn--primary'>Count</div>
			</div>
			<p className='counter'>Count: {counter}</p>
	</div>
	)
}

export default Header;