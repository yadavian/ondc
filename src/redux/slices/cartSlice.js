
import { createSlice, current } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [
            {
                id: 4545
            }
        ]
    },
    reducers: {
        setCart: (state, action) => {

            state.cartItems = action.payload

            console.log('action', action) // action : {type: 'cart/setCart', payload: true}
            console.log('current(state)', current(state)) // current state tree
        }
    }
})

export const { setCart } = cartSlice.actions

const cartReducer = cartSlice.reducer;
export default cartReducer