import React, { Component } from 'react';
class Child extends Component {
    componentDidMount(){
      window.onresize = ()=>{
        console.log("窗口大小发生变化");
      }
    }
    componentWillUnmount(){
      window.onresize = null;
    }
    render(){
        return <h1>hello react</h1>
    }
}
class App extends Component {
  state={
    show: true
  }
  render(){
    let {show} = this.state;
    return <div>
        {show?<Child />:""}
        <button
          onClick={()=>{
              this.setState({
                show:!show
              })
          }}
        >{show?"隐藏组件":"显示组件"}</button>
    </div>
  }
}
export default App;
