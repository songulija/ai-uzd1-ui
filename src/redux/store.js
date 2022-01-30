import {createStore,combineReducers,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {playersReducer} from './reducers/playersReducer'

const allReducers = combineReducers({
    playersReducer
})

const middleware = [thunk]
const store = createStore(allReducers,composeWithDevTools(applyMiddleware(...middleware)))
export default store;