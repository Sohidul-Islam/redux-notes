import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./../Redux";

function CakeContainer(props) {
  return (
    <div>
      <h1>Number of cakes {props.numOfCakes}</h1>
      <button onClick={props?.buyCake}>Buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// here we connect with react redux with mapt to state props map to dispatch props.
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
