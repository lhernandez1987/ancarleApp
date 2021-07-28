import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../modules/auth/reducers/authReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Agregar los reducer
const reducers = combineReducers({

    auth: authReducer

})

export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));