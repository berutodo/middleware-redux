const FETCH_STARTED = 'user/FETCH_STARTED';
const FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const FETCH_ERROR = 'user/FETCH_ERROR';

const initialState = {
    loading: false,
    data: null,
    error: null
}

export function fetchUser() {
    return async(dispatch) => {
        try {
            dispatch({ type: FETCH_STARTED }) // ACTION
            const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9nc2FwaS5vcmlnYW1pZC5kZXYiLCJpYXQiOjE2NzMzOTcwMDksIm5iZiI6MTY3MzM5NzAwOSwiZXhwIjoxNjczNDgzNDA5LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxNSJ9fX0.Mk6aG7gKqOlS8w4lvOJfNIjJ-Wx7yNE2qEe_cBRb_NE',
                },
            });
            const data = await response.json();
            dispatch({ type: FETCH_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message })
        }
    }

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


export default reducer;