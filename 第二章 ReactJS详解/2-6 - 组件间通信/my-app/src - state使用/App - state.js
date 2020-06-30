import React,{Component} from 'react';
// class App extends Component{
//     state = {
//       name:"开课吧",
//       age: 9
//     }
//     render(){
//         let {name,age} = this.state;
//         return (<div>
//             <p>姓名:{name}</p>
//             <p>年龄:{age}</p>
//             <button>过了一年</button>
//         </div>)
//     }
// }
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:"开课吧",
      age: 9
    };
  }
  render(){
      let {name,age} = this.state;
      return (<div>
          <p>姓名:{name}</p>
          <p>年龄:{age}</p>
          <button
            onClick={()=>{
              this.setState({
                age: ++age
              });
              console.log(this.state.age);
            }}
          >过了一年</button>
      </div>)
  }
}
export default App;