import React,{Component} from 'react';
import Child from "./child";
import {Provider} from "./context";
class App extends Component{
    render(){
        return (
          <Provider value={{
            info: "要传递给子孙级的数据"
          }}>
              <Child />
          </Provider>
        )
    }
}
export default App;