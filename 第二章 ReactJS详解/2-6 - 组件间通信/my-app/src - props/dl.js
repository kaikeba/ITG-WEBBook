import React,{Component} from 'react';
export default class Dl extends Component {
    render(){
        let {dlData} = this.props;
        return (
            <dl className="friend-group expanded">
                <dt>{dlData.title}</dt>
                {
                    dlData.list.map((item,index)=>{
                        return <dd key={index}>{item.name}</dd>
                    }) 
                }
            </dl>
        )
    }
}