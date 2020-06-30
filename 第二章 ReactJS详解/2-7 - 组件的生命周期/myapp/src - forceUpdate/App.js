import React, { Component } from 'react';
let name = "name";
class App extends Component {
  render(){
    return <div>
        <p>{name}</p>
        <button
          onClick={()=>{
             name = "新名字";
             this.forceUpdate()
          }}
        >更新名字</button>
    </div>
  }
}

export default App;
