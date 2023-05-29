
import { createSlice, current } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        setAddCartItem: (state, action) => {
            state.cartItems.push(action.payload)
            // console.log('action', action) // action : {type: 'cart/setCart', payload: true}
            // console.log('current(state)', current(state)) // current state tree
        },
        setCartCount: (state, action) => {
            state.cartItems = action.payload
        },
        setCartReset: (state, action) => {
            console.log('action', action)
            state.cartItems = []
        },

        setRemoveCartItemById: (state, action) => {
            console.log('action.payload', action.payload)
            console.log('current(state)', current(state))
            let prevCartItems = JSON.parse(JSON.stringify(current(state).cartItems))
            console.log('prevCartItems', prevCartItems)
            const index = prevCartItems.findIndex((obj) => obj.id == action.payload.foodId)
            console.log('index', index)

            if (index != -1) {
                prevCartItems.splice(index, 1)
            }

            console.log('prevCartItems', prevCartItems)


            state.cartItems = prevCartItems

            // state.cartItems.push(action.payload)
            // console.log('action', action) // action : {type: 'cart/setCart', payload: true}
            // console.log('current(state)', current(state)) // current state tree
        },
    }
})

export const { setAddCartItem, setCartCount, setCartReset, setRemoveCartItemById } = cartSlice.actions

const cartReducer = cartSlice.reducer;
export default cartReducer