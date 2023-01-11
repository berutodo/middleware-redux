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

//SEMPRE QUE EU PRECISAR FAZER UM FETCH A FUNCAO PRECISA RETORNAR OUTRA FUNCAO

export function tokenFetch(user) {
    return async(dispatch) => {
        try {
            dispatch({ type: FETCH_STARTED }) // ACTION
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
            dispatch({ type: FETCH_SUCCESS, payload: token, localStorage: "token" })
        } catch (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message })
        }
    }

}

export default reducer;