
import { createSlice, current } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            console.log('action', action) // action : {type: 'login/setIsLoggedIn', payload: true}
            console.log('current(state)', current(state)) // current state tree
            state.isLoggedIn = action.payload
        }
    }
})

const loginReducer = loginSlice.reducer;
export const { setIsLoggedIn } = loginSlice.actions
export default loginReducer;