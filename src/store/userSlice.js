import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: { name: 'Han', age: 26 },
    reducers: {
        changeName(state) {
            state.name = 'JISOO HAN'
        },
        addAge(state) {
            state.age++
        }
    }
})

export let { changeName, addAge } = user.actions
export default user

