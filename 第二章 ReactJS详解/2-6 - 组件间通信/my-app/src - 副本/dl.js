import React,{Component} from 'react';
export default class Dl extends Component {
    render(){
        let {dlData,name,openName,changeOpen} = this.props;
        return (
            <dl className={"friend-group "+(openName==name?"expanded":"")}>
                <dt
                    onClick={()=>{
                        changeOpen(openName==name?"":name);
                    }}
                >{dlData.title}</dt>
                {
                    dlData.list.map((item,index)=>{
                        return <dd key={index}>{item.name}</dd>
                    }) 
                }
            </dl>
        )
    }
}