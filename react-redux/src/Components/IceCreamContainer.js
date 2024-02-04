import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "./../Redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h1>Number of Ice-cream {props?.numberOfIceCream}</h1>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { numberOfIceCream: state?.iceCream?.numberOfIceCream };
};

const mapDispatchToProps = (dispatch) => {
  return { buyIceCream: () => dispatch(buyIcecream()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
