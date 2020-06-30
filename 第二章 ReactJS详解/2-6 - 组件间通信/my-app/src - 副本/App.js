import React,{Component} from 'react';
import Dl from './dl';
import data from "./data";
class App extends Component{
    state={
      openName:""
    }
    changeOpen=(name)=>{
      this.setState({
        openName:name
      })
    }
    render(){
        let {openName} = this.state; 
        return (<div className="friend-list">
          {
            Object.keys(data).map(itemName=>{
                return <Dl 
                    key={itemName} 
                    dlData={data[itemName]}
                    name = {itemName}
                    openName = {openName}
                    changeOpen = {this.changeOpen}
                />
            })
          }
        </div>)
    }
}
export default App;