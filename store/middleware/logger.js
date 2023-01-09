const logger = (store) => next => action => {
    console.log("Indo incrementar", store.getState())
    if (store.getState() >= 4) {
        console.log('Não podemos mais acrescentar nada :(')
        console.log(store.getState())
    }
    return next(action)
}

export default logger;