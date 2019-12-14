import { createStore, applyMiddleware, combineReducers } from 'redux'
import { router5Middleware, router5Reducer } from 'redux-router5'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'


export default function configureStore(router, initialState ={}) {
    const createStoreWithMiddleware = applyMiddleware(
        thunk,
        router5Middleware(router),
        createLogger()
    )(createStore)

    const store = createStoreWithMiddleware(
        combineReducers({
            router: router5Reducer,
            //TODO: add reducers
        }),
        initialState
    )

    window.store = store
    return store
}