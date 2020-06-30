import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    console.log("1-组件初始化");
    this.state = {};
  }
  // static getDerivedStateFromProps(props,state){
  //   console.log("2-将props映射到state中");
  //   return null;
  // }
  componentWillMount(){
    console.log("3-组件即将进行挂载");
  }
  render(){
    console.log("4-根据 return 生成虚拟DOM");
    return <h1>hello react</h1>
  }
  componentDidMount(){
    console.log("5-组件已经挂载完毕，虚拟DOM，已经添加到真实的DOM中");
  }
}

export default App;
