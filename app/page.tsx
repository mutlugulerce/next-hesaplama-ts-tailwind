'use client';

import  type {RootState} from './Global Redux/store'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement,incrementByAmount} from './Global Redux/Features/counter/counterSlice'

export default function Home() {
  
const count = useSelector((state:RootState) => state.counter.value);
const dispatch=useDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <button onClick={() =>dispatch(increment())}>
      Increment
    </button>
    <button  onClick={() =>dispatch(decrement())}>
      Decrement
    </button>
    <span>{count}</span>
    <button  onClick={() =>dispatch(incrementByAmount(3))}>
      Increment By 3
    </button>
    </main>
  )
}
