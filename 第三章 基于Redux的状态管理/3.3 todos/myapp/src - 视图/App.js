import React,{PureComponent} from 'react';
import Title from './title';
import Create from './create';
import Todos from './todos';
import State from './state';
/*

  数据驱动视图

   1. 确定数据格式
   2. 根据数据完成列表的渲染
   3. 完成添加功能
   4. 完成单项错误

   data:[
      {
        id: 0,
        txt: "数据内容",
        done: false
      },{
        id: 1,
        txt: "数据内容2",
        done: false
      },{
        id: 2,
        txt: "数据内容3",
        done: false
      }
   ]

*/

class App extends PureComponent {
  state = {
      data:[
          {
            id: 0,
            txt: "数据内容",
            done: false
          }
      ]
  }
  // 添加数据
  addData=(txt)=>{
    let {data} = this.state;
    data.unshift({
      id: Date.now(),
      txt,
      done: false
    });
    this.setState({
      data:[...data]
    });
  }
  // 修改完成状态
  changeDone=(id,done)=>{
    let {data} = this.state;
    data.forEach(item=>{
      if(item.id === id){
        item.done = done;
      }
    });
    this.setState({
      data:data.map(item=>({...item}))
    });
  }
  // 修改事项信息
  editTxt=(id,txt)=>{
    let {data} = this.state;
    console.log(id,txt);
    data.forEach(item=>{
      if(item.id === id){
        item.txt = txt;
      }
    });
    this.setState({
      data:data.map(item=>({...item}))
    });
  }
  // 删除单项
  remove=(id)=>{
    let {data} = this.state;
    data = data.filter(item=>item.id!==id);
    this.setState({
      data
    });
  }
  //删除已完成的
  removeDone=()=>{
    let {data} = this.state;
    data = data.filter(item=>!item.done);
    this.setState({
      data
    });
  }
  render(){
    let {data} = this.state; 
    return (<div id="todoapp">
        <Title />
        <div className="content">
            <Create addData={this.addData} />    
            {data.length<1?"":[
                <Todos
                    key={1}
                    data={data} 
                    changeDone={this.changeDone} 
                    editTxt={this.editTxt}
                    remove = {this.remove}
                />,
                <State 
                  data={data} 
                  key={2}
                  removeDone={this.removeDone}
                />
            ]}
        </div>
    </div>)
  }
}

export default App;
