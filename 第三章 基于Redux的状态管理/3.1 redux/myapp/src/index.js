import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
function reducer(state={
    count: 1 //在这里设定 state 的初始值
},action){
  // action.type 代表修改指令，该指令可以自定义
  switch(action.type){
      case "COUNT_PLUS":
        // 根据 action 指令，修改 state 并返回新的 state
        return {
            count: state.count + 1
        }
      case "COUNT_REDUCE":
        return {
          count: state.count - 1
        }
  }
  return state;
}
function render(){
  let state = store.getState();
  ReactDOM.render(
    <div>
        <button onClick={()=>{
          store.dispatch({
            type:"COUNT_REDUCE"
          });
        }}>-</button>
        <span>{state.count}</span>
        <button onClick={()=>{
          store.dispatch({
            type:"COUNT_PLUS"
          });
        }}>+</button>
    </div>,
    document.getElementById('root')
  );
}
let store = createStore(reducer);
// 添加监听，当 state 发生变化时重新渲染视图
let unSubscribe = store.subscribe(render);
// 完成初次视图渲染
render();
// 10秒钟后取消对 state 变化的监听
setTimeout(()=>{
  unSubscribe();
},10000);
