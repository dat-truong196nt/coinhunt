import './App.css';
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import Footer from './component/Footer/Footer';
import Counter from './component/Counter/Counter';

function App() {
	Counter();
	return (
		<>
			<Header counter={Counter()}/>
			<Home/>
			<Footer />
		</>
	);
}

export default App;
