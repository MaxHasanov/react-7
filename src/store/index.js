import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { profileReducer } from './profile/reducer'
import { messagesReducer } from './messages/reducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))