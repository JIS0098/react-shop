import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name:'Han', age:26},
    reducers :{
        changeName(state){
            state.name='JISOO HAN'
        },
        addAge(state){
            state.age++
        }
    }
})


let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers:{
        addCount(state){
            state.count++
        }
    }
})

export let {changeName ,addAge} = user.actions
export let {addCount} = cart.actions


export default configureStore({
    reducer: {
        cart: cart.reducer,
        user: user.reducer
    }
}) 