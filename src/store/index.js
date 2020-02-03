import {createStore,combineReducers} from 'redux'
import {reducer} from '../reducer'

export const store = createStore(combineReducers({film:reducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())