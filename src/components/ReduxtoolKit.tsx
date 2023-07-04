import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../types';
import { addOne, addSome, subOne, subSome, reset } from '../types/CountSlice';

export default function ReduxtoolKit() {

  const dispatch = useDispatch()
  const count = useSelector((state: any) => state.counter.count)

  return (
    <div className="App">
      <p>Count is: {count}</p>
      <div>
        <button onClick={() => dispatch(addOne())}>Add 1</button>
        
        <button onClick={() => dispatch(subOne())}>Decrease 1</button>

        <button onClick={() => dispatch(addSome(10))}>Add 10</button>
        <button onClick={() => dispatch(subSome(10))}>Decrease 10</button>

        <button onClick={() => dispatch(reset())}>Reset count</button>
      </div>
    </div>
)
}
