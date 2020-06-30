import React,{Component} from 'react';
export default class Dl extends Component {
    state={
        isOpen: false
    }
    render(){
        let {dlData} = this.props;
        let {isOpen} = this.state;
        return (
            <dl className={"friend-group "+(isOpen?"expanded":"")}>
                <dt
                    onClick={()=>{
                        this.setState({
                            isOpen:!isOpen 
                        })
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