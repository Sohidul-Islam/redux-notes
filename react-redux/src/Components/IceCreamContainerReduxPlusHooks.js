import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../Redux";

function IceCreamContainerReduxPlusHooks() {
  const { numberOfIceCream } = useSelector((state) => state?.iceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux + Hooks</h1>
      <h1>Number of Ice-cream {numberOfIceCream}</h1>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  );
}

export default IceCreamContainerReduxPlusHooks;
