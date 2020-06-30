import React, { Component,createRef} from 'react';
class Child extends Component {
  render(){
    return <p>子组件内容</p>
  }
}
class App extends Component {
  parent = createRef();
  child = createRef();
  componentDidMount(){
    console.log(this.parent.current);// 打印真实的 DOM 节点
    console.log(this.child.current);// 打印 Child 的实例化对象
  }
  render(){
      return <div>
          <p ref={this.parent}>父组件内容</p>
          <Child ref={this.child} />
      </div>
  }
}
export default App;
