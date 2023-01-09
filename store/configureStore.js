import incrementar from './incrementar'
import logger from './middleware/logger'
const { applyMiddleware, compose } = Redux;
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);
const enhancer = Redux.composeEnhancers(applyMiddleware(logger))
const reducer = Redux.combineReducers({ incrementar })

const store = Redux.createStore(reducer, enhancer)
export default store;