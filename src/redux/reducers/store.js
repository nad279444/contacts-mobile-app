import {createStore} from 'redux'
import authReducer from './authReducer'

let store =  createStore(authReducer)

export default store;