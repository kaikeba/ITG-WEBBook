import React, { Component } from 'react';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.clickHandler = this.clickHandler.bind(this);
  // }
  // clickHandler(e){
  //     console.log(this); // 打印 App 的 实例
  //     console.log(e.target); //获取事件源
  // }
  // clickHandler(){
  //   alert("点击事件");
  // }
  clickHandler=(e)=>{
      console.log(this); // 打印 App 的 实例
      console.log(e.target); //获取事件源
  }
  render(){
    <button onClick={this.clickHandler}></button>
  }
}

export default App;
