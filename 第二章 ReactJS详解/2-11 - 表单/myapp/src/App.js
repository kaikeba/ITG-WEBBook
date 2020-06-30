import React, { Component } from 'react';

class App extends Component {
  state={
    val:"",
    checked:true
  }
  render(){
    let {val,checked} = this.state;
    return <div>
        <input 
          type="text" 
          defaultValue={val} 
        />
        <input 
          type="checkbox" 
          defaultChecked={checked} 
        />
    </div>
  }
}

export default App;
