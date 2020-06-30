import React,{Component} from 'react';
class App extends Component{
    state = {
      off: true,
      name:"开课吧",
      age: 9
    };  
    render(){
      let {name,age,off} = this.state;
      console.log("渲染");
      return (<div>
          <p>姓名:{name}</p>
          <p>年龄:{age}</p>
          <button
            onClick={()=>{
              if(off){
                this.setState({
                  name:"北京开课吧科技有限公司"
                });
              } else {
                this.setState({
                  name:"开课吧"
                })
              }
              this.setState({
                off:!off
              })
            }}
          >{off?"显示全称":"显示简称"}</button>
      </div>)
  }
}
export default App;