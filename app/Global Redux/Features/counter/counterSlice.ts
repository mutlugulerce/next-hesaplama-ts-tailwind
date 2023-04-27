'use client';

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
        increment:  (state) => {state.value += 1},
        decrement: (state) =>{state.value -= 1},
        incrementByAmount: (state,action) => {
            state.value += action.payload
        },
        reset: (state) => {state.value = 0}
    }
})

export const {increment,decrement,incrementByAmount,reset} = counterSlice.actions;

export default counterSlice.reducer;