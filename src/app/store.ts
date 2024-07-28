import { combineReducers, configureStore } from '@reduxjs/toolkit'
import regionReducer from './reducers/regionReducer'

const rootReducer = combineReducers({
    regionReducer
})
export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({ 
    reducer: rootReducer 
})

// The store now has redux-thunk added and the Redux DevTools Extension is turned on

