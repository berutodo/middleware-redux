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


const reducer = immer.produce((state, action) => {
    switch (action.type) {
        case INCREMENTAR_TEMPO:
            state.diasRestantes + 1;
            break;
        case REDUZIR_TEMPO:
            state.diasRestantes - 1;
            break;
        case MODIFICAR_EMAIL:
            state.email = action.payload
    }
}, initialState);

export default reducer;