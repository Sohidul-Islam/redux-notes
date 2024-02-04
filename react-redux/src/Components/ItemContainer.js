import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "./../Redux";

function ItemContainer(props) {
  return (
    <div
      style={{
        margin: "10px",
        border: "1px solid #eeee",
        borderRadius: "12px",
        padding: "14px",
      }}
    >
      <h3>
        Item {props.cake ? "Cake" : "Ice cream"} - {props?.item} (map state to
        props)
      </h3>

      <button onClick={props?.dispatch}>
        {props.cake ? "Cake" : "Ice cream"}
      </button>
    </div>
  );
}

const mapStateToProps = (state, containerOwnProps) => {
  const itemState = containerOwnProps?.cake
    ? state.cake.numOfCakes
    : state.iceCream.numberOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, containerOwnProps) => {
  const itemState = containerOwnProps?.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());
  return {
    dispatch: itemState,
  };
};

// here we connect with react redux with mapt to state props map to dispatch props.
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
