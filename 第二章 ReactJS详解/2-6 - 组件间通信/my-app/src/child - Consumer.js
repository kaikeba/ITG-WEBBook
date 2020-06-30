import React,{Component} from 'react';
import {Consumer} from "./context";
class Child extends Component{
    render(){
        return (
            <Consumer>
                {(val)=>{
                    // 这里的 val 就是 Provider 传递下来的数据
                    return <p>{val.info}</p>
                }}
            </Consumer>
        )
    }
}
export default Child;