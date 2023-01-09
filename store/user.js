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

async function fetchUrl(dispatch, url) {}

fetchUrl(store.dispatch, 'https://dogsapi.origamid.dev/json/api/user')

export default reducer;