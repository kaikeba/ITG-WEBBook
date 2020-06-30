import React from 'react';
import {useSelector,useDispatch} from "react-redux";
function App(props) {
  const count = useSelector(state=>state.count);
  const dispatch = useDispatch();
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
export default App;
