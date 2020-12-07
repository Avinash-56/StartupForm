import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './reducers'


function saveToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (err) {
        console.log(err)
    }
}

function loadFromLocalStorage(){
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState=== null) return undefined
        return JSON.parse(serializedState)

    } catch (err) {
        console.log(err)
        return undefined
    }
}

const initialState = {}

const middleware = [thunk]
const persistedState = loadFromLocalStorage()
const store = createStore(
rootReducers,
persistedState,
composeWithDevTools(applyMiddleware(...middleware))
)

store.subscribe(()=>saveToLocalStorage(store.getState()))

export default store