import React, { Component } from 'react';
class Child extends Component {
    render(){
      return <p>子组件内容</p>
    }
}
class App extends Component {
  componentDidMount(){
    console.log(this.refs.parent);
    console.log(this.refs.child);
  }
  render(){
      return <div>
          <p ref="parent">父组件内容</p>
          <Child ref="child" />
      </div>
  }
}
export default App;
