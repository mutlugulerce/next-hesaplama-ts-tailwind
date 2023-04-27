import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremenet:  (state) => {state.value += 1},
        decrement: (state) =>{state.value -= 1},
        incremenetByAmount: (state,action) => {
            state.value += action.payload
        }
    }
})

export const {incremenet,decrement,incremenetByAmount} = counterSlice.actions;

export default counterSlice.reducer;