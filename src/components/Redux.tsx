import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { ReduxState, UserState } from '../types';
import { createStore } from 'redux';

export default function UserList() {

  const dispatch = useDispatch()
  const count = useSelector((state: ReduxState) => state.count)

  return (
      <div className="App">
        <p>Count is: {count}</p>
        <div>
        <button onClick={() => dispatch({ type: 'ADD' })}>Add 1</button>
          
          <button onClick={() => dispatch({ type: 'SUB' })}>Decrease 1</button>

          <button onClick={() => dispatch({ type: 'ADDSOME', payload: 10 })}>Add 10</button>
          <button onClick={() => dispatch({ type: 'SUBSOME', payload: 10 })}>Decrease 10</button>

          <button onClick={() => dispatch({ type: 'RESET' })}>Reset count</button>
        </div>
      </div>
  )
}
