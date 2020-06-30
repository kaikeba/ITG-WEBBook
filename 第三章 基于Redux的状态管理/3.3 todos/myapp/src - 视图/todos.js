import React,{PureComponent} from 'react';
import Li from './li';
class Todos extends PureComponent {
  render(){
    //console.log(this.props.data);
    //console.log(11); 
    let {data} = this.props;
    return (<ul id="todo-list">
        {data.map(item=><Li key={item.id} {...this.props} data={item}/>)}
    </ul>)
  }
}

export default Todos;
