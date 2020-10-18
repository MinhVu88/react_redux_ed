import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/In_De_crement';

export default function App() {
  const counter_reducer = useSelector(state => state.Counter);

  const isLoggedIn = useSelector(state => state.LogIn);

  const dispatch = useDispatch();

  let add = 2;

  let subtract = 1;

  return (
    <div>
      <h1>Redux Tutorial for beginners</h1>
      
      <h4>Counter: {counter_reducer}</h4>
      
      <button onClick={() => dispatch(increment(add))}>+</button>
      
      <button onClick={() => dispatch(decrement(subtract))}>-</button>
      
      <h4>Logged in? {isLoggedIn ? 'Yes' : 'No'}</h4>
    </div>
  )
};
