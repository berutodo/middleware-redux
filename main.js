import thunk from './store/middleware/thunk'
import user, { fetchUser } from './store/user'
import token, { tokenFetch } from './store/token'

import localStorage from './store/middleware/localStorage'


const { applyMiddleware, compose } = Redux;
const reducer = Redux.combineReducers({ token, user })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(thunk, localStorage))
const store = Redux.createStore(reducer, enhancer)

store.dispatch(tokenFetch({ username: 'dog', password: 'dog' }))
async function getToken() {
    const state = await store.getState()
    return state.token.data
}
store.dispatch(fetchUser(getToken))