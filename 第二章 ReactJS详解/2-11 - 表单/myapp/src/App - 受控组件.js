import React, { Component } from 'react';

class App extends Component {
  state={
    val:""
  }
  render(){
    let {val} = this.state;
    return <div>
        <input 
          type="text" 
          value={val} 
          onChange={(e)=>{
            this.setState({
              val:e.target.value
            })
          })
        />
    </div>
  }
}

export default App;
