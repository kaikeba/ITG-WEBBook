import React, { Component } from 'react';
class Child extends Component {
  state = {
    name: "child"
  }  
  componentWillReceiveProps(newProps){
    console.log("1-接受父组件传递进来的更新后的props");
  }
  shouldComponentUpdate(newProps,newState){
      console.log("2-判断组件是否要进行更新");
      return true;
  }
  componentWillUpdate(newProps,newState){
      console.log("3-组件即将更新");
  }
  componentDidUpdate(prevPorps,prevState){
    console.log("5-组件更细完成");
  }
  render(){
    console.log("4-组件正在更新");
    let {name} = this.state;
    let {parentName,changeParentName} = this.props;
    return <div>
        <p>父级名字：{parentName}</p>
        <button
          onClick={()=>{
            changeParentName("父级组件");
          }}
        >修改父级名字</button>
        <p>{name}</p>
        <button
          onClick={()=>{
            this.setState({
              name:"子组件"
            });
          }}
        >修改自己名字</button>
    </div>
  }
}
class App extends Component {
  state = {
    name: "parent"
  }
  changeName=(newName)=>{
    this.setState({
      name: newName
    });
  }
  render(){
    let {name} = this.state; 
    return <div>
        <Child 
          parentName = {name}
          changeParentName = {this.changeName}
        />
    </div>
  }
}

export default App;
