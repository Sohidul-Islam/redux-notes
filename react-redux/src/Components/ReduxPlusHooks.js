import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./../Redux";

// react redux pattern
/*
Action creators, reducers, provide the store and connect the components.
Components can access state and dispatch actions.

React Hooks:
Basically in functional components the ability to use locale components state execute sideeffects and more..
In React Redux v7.1 hooks added.
*/

function ReduxPlusHooks() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux + Hooks</h1>
      <h1>Number of cakes {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

// here we connect with react redux with mapt to state props map to dispatch props.
export default ReduxPlusHooks;
