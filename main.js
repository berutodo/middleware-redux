import logger from './store/middleware/logger'
import thunk from './store/middleware/thunk'
const FETCH_STARTED = 'user/FETCH_STARTED';
const FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const FETCH_ERROR = 'user/FETCH_ERROR';

const initialState = {
    loading: false,
    data: null,
    error: null
}

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case FETCH_STARTED:
            return { loading: true }
            break;
        case FETCH_SUCCESS:
            return { loading: false, data: action.payload }
            break;
        case FETCH_ERROR:
            return { loading: false, data: null, error: action.payload }
    }
}, initialState);

//SEMPRE QUE EU PRECISARFAZER UM FETCH A FUNCAO PRECISA RETORNAR OUTRA FUNCAO

function fetchUrl(dispatch, url) {
    return async(dispatch) => {
        try {
            dispatch({ type: FETCH_STARTED })
            const data = await fetch(url).then(r => r.json())
            dispatch({ type: FETCH_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message })
        }
    }

}


const { applyMiddleware, compose } = Redux;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(thunk))
const store = Redux.createStore(reducer, enhancer)
store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'))