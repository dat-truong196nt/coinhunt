import {
	INCREASE_AUTO_COUNTER
} from './actions'
import {combineReducers} from 'redux'


const initialStateAutoCounter = {
	count: 0,
}

export const onRequestCounter = (state = initialStateAutoCounter, action) => {
	switch (action.type) {
		case INCREASE_AUTO_COUNTER:
			return {...state, count: state.count + 1}
		default:
			return state
	}
}

export const rootReducer = combineReducers({onRequestCounter})