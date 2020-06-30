import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
function Create(){
    const [val,setVal] = useState("");
    const dispatch = useDispatch();
    return (<div id="create-todo">
        <input 
          id="new-todo" 
          placeholder="请输入要完成的事项" 
          autoComplete="off"
          type="text"
          value={val}
          onChange={({target})=>{
              setVal(target.value);
          }}
          onKeyDown={({keyCode})=>{
            if(keyCode === 13
            && val.trim()){
                dispatch({
                  type: "TODO_ADD",
                  title:val
                });
                setVal("")
            }
          }}
        />
    </div>)
}
export default Create;
