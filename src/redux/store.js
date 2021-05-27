import {createStore, combineReducers} from 'redux'
import appointmentReducer from './appointmentReducer'
import authReducer from './authReducer'
import quizReducer from './quizReducer'

const rootReducer = combineReducers({
    appReducer: appointmentReducer,
    authReducer,
    quizReducer
})

export default createStore(rootReducer)