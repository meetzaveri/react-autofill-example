import React, { Component, Fragment } from "react";

const Autofill = props => {
  return (
    <Fragment>
      {" "}
      <input
        id="deg"
        name="inputValue"
        value={props.inputValue}
        onChange={props.onChangeHandler}
        placeholder="Type anything ..."
      />{" "}
    </Fragment>
  );
};

export default Autofill;
