const { BUY_CAKE, BUY_CAKE_PAYLOAD } = require("./cakeActionTypes");

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const buyCakewithPayload = (payload) => {
  return {
    type: BUY_CAKE_PAYLOAD,
    payload,
  };
};
