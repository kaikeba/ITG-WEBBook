import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
function Li (props){
    let {id,title,done} = props;
    const [isEdit,changeEdit] = useState(false);
    const dispatch = useDispatch();
    let edit = useRef();
    let [val,setVal] = useState(title);
    useEffect(()=>{
        if(isEdit){
            edit.current.focus();
        }
    },[isEdit]);
    return (
        <li className={isEdit?"editing":""}>
            <div className={"todo "+(done?"done":"")}>
                <div className="display">
                    <input 
                        className="check" 
                        type="checkbox"
                        checked={done}
                        onChange={({target})=>{
                            dispatch({
                                type:"TODO_DONE",
                                id,
                                done:target.checked
                            })
                        }}
                    />
                    <div 
                        className="todo-content"
                        onDoubleClick={()=>{
                            changeEdit(true);
                        }}
                    >{title}</div>
                    <span 
                        className="todo-destroy"
                        onClick={()=>{
                            dispatch({
                                type:"TODO_REMOVE",
                                id
                            })
                        }}
                    ></span>
                </div>
                <div className="edit">
                    <input 
                        className="todo-input" 
                        type="text"
                        ref={edit}
                        value={val}
                        onChange={({target})=>{
                            setVal(target.value);
                        }}
                        onBlur={()=>{
                            if(val.trim()){
                                dispatch({
                                    type:"TODO_EDIT",
                                    id,
                                    title:val
                                })
                            } else {
                                setVal(title);
                            }
                            changeEdit(false);
                        }}
                    />
                </div>
            </div>
        </li>
    )
}
export default Li;
