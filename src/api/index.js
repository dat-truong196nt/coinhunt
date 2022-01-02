import axios from 'axios'
// Axios: Same code base for client and server side.

const axiosClient = axios.create({
	baseURL: 'https://api.coingecko.com/api/v3',
	headers: {'X-Custom-Header': 'application/json'},
})

const getAll = () => {
	axiosClient.get('/coins/markets', {
		params: {
			vs_currency: 'usd',
			page: 1,
			per_page: 20,
		}
	})
};

const getSpecific = (id) => {
	axiosClient.get('/coins/markets', {
		params: {
			ids: id,
			vs_currency: 'usd',
		}
	})
};

export {getAll, getSpecific};