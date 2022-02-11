import React from "react";
import { connect } from "react-redux";
import { addCounter } from "./actions";
import {resetCounter}  from "./actions"

const App = props => (
  <div>
  <center>
  <h1 style={{color:"red"}}>React_Redux Counter</h1>
    <div>{props.counter}</div>
    <button onClick={props.addCounter}>Increment</button>
    <h1>RESET</h1>

    <button onClick={()=>props.resetCounter}>RESET</button>
    </center>
  </div>
);

const mapStateToProps = state => {
  return { counter: state.counter };
};

const mapDispatchToProps = {
  addCounter
};

const mapStateToProps2 = state => {
  return { counter: state.counter1 };
};

const mapDispatchToProps2 = {
  resetCounter
};


export default connect(mapStateToProps, mapDispatchToProps)(App);


