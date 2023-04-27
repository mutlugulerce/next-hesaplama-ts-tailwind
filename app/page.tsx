'use client';

import  type {RootState} from './Global Redux/store'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement,incrementByAmount,reset} from './Global Redux/Features/counter/counterSlice'

export default function Home() {
  
const count = useSelector((state:RootState) => state.counter.value);
const dispatch=useDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-amber-200">
<div>
<button className='rounded-full bg-white p-2' onClick={() => dispatch(reset())}>Reset</button>
</div>
<span className='rounded-full p-16 bg-green-400 text-6xl text-white'>{count}</span>


    <button className='border-spacing-1 bg-orange-500 text-white py-2 px-44 rounded-xl text-xl' onClick={() =>dispatch(increment())}>
      Increment
    </button>
    <button className='border-spacing-1 bg-red-800 text-white py-2 px-44 rounded-xl text-xl'  onClick={() =>dispatch(decrement())}>
      Decrement
    </button>
   
    <button className='border-spacing-1 bg-orange-950 text-white py-2 px-40 rounded-xl text-xl' onClick={() =>dispatch(incrementByAmount(3))}>
      Increment By 3
    </button>
    </main>
  )
}
