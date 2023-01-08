const FETCH_STARTED = 'user/FETCH_STARTED';
const FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const FETCH_ERROR = 'user/FETCH_ERROR';

const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + token,
    },
});
const data = await response.json();

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