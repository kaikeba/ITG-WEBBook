import React, { useState, useEffect } from 'react';
function Course(){
    const [course,setCourse] = useState("Web 高级工程师");
    const [num,setNum] = useState(1);
    useEffect(()=>{
      console.log("组件挂在或更新");
      return ()=>{
          console.log("清理更新前的一些全局内容，或检测组件即将卸载");
      }
    },[num]);
    console.log(1);
    return <div>
          <div>
            选择课程：
            <select
              value = {course}
              onChange = {({target})=>{
                  setCourse(target.value);
              }}
            >
                <option value="Web 全栈工程师">Web 全栈工程师</option>
                <option value="Web 高级工程师">Web 高级工程师</option>
            </select>
          </div>
          <div>
            购买数量：<input 
              type="number" 
              value={num}
              min={1}
              onChange={({target})=>{
                setNum(target.value);
              }}
            />
          </div>
    </div> 
}
function App() {
  const [show,setShow] = useState(true)
  return <div>
    {show?<Course />:""}    
    <button onClick={()=>{
        setShow(!show);
    }}>{show?"隐藏课程":"显示课程"}</button>
  </div>;
}
export default App;
