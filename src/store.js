import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers:{
        addCount(state,actions){
        let a = state.findIndex((a)=>{
            return a.id === actions.payload
        })
        state[a].count++
        }
    }
})


export let {addCount} = cart.actions


export default configureStore({
    reducer: {
        cart: cart.reducer,
        user: user.reducer
    }
}) 