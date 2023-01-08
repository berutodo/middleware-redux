import token from './token';
import user from './user';

const reducer = Redux.combineReducers({ token, user })

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;