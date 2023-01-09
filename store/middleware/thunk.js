const thunk = store => next => action => {
    console.log(action)
    if (typeof action === 'function') {
        return action(store.dispatch)
    }
    return next(action)
}

export default thunk;