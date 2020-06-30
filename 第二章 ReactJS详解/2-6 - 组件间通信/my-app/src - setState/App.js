import React,{Component} from 'react';
import Dl from './dl';
import data from "./data";
class App extends Component{
    render(){
        return (<div className="friend-list">
          {/* 注意 data 是一个对象，而非数组 */}
          {
            Object.keys(data).map(itemName=>{
                {/* key的作用和取值在后文中详细的讲 */}
                return <Dl 
                    key={itemName} 
                    dlData={data[itemName]}
                />
            })
          }
        </div>)
    }
}
export default App;