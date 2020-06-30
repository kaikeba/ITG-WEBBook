import {createStore} from "redux";
function countFn(state={
    count:1
},action){
    switch(action.type){
        case "COUNT_PLUS":
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
let store = createStore(countFn);
export default store;