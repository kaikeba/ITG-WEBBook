import React,{Component} from 'react';
import context from "./context";
class Child extends Component{
    /**
     * 也可以通过 static 属性来接收都是一样的意思
     * static contextType = context;
     **/
    render(){
        return <p>{this.context.info}</p>
    }
}
Child.contextType = context;
export default Child;