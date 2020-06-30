import React from 'react';
import {connect} from "react-redux";
function App(props) {
  let {count,dispatch} = props;
  return (
    <div>
      <button onClick={()=>{
          dispatch({
            type:"COUNT_REDUCE"
          });
        }}>-</button>
        <span>{count}</span>
        <button onClick={()=>{
          dispatch({
            type:"COUNT_PLUS"
          });
        }}>+</button>  
    </div>
  );
}

App = connect(state=>state)(App);
export default App;
