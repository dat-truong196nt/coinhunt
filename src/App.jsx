import './App.css';
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import Footer from './component/Footer/Footer';
import Counter from './component/Counter/Counter';
import { rootReducer } from './redux/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
	return (
		<Provider store={store}>
			<Header/>
			<Home/>
			<Footer />
		</Provider>
	);
}

export default App;
