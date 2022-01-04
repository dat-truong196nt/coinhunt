import Counter from "../Counter/Counter";

const Header = () => {
	return (
		<>
		<div className='header'>
			<div className='nav'>
				<div className='btn btn--primary my-10'>Home</div>
				{/* <div className='btn btn--primary my-10 ml-10'>Count</div> */}
			</div>
			<p className='header__right counter'>Count: {Counter()}</p>
		</div>
		</>
	)
}

export default Header;