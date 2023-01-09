const FETCH_STARTED = 'token/FETCH_STARTED';
const FETCH_SUCCESS = 'token/FETCH_SUCCESS';
const FETCH_ERROR = 'token/FETCH_ERROR';


const response = await fetch(
    'https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    },
);
const { token } = await response.json();

export const startFetch = () => ({ type: FETCH_STARTED })

const middleware = Redux.applyMiddleware(tokenFetcher)

const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case FETCH_STARTED:
            return state;
            break;
        case FETCH_SUCCESS:
            state.diasRestantes - 1;
            break;
        case FETCH_ERROR:
            state.email = action.payload
    }
}, initialState);

export default reducer;