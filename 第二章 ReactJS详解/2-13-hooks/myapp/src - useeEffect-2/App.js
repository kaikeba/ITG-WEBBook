import React, { useState, useEffect, useRef } from 'react';
function Course(){
    const [course,setCourse] = useState("Web 高级工程师");
    const [num,setNum] = useState(1);
    let prevCourse = useRef(course);
    let prevNum = useRef(num);
    useEffect(()=>{
        console.log("组件挂在阶段");
        return ()=>{
          console.log("组件卸载之前");
        }
    },[]);//一定注意依赖参数传入一个空数组，不传的话组件的任何更新都会调用该副作用
    useEffect(()=>{
        if(course != prevCourse.current
        || num != prevNum.current){
          // 如果当前值和上一次值不一样则代表组件又更新
          console.log("组件更新");
          // 这里注意 ref 不会自动更新，需要我们手动进行更新
          prevCourse.current = course;
          prevNum.current = num;
        }
    },[course,num]); 
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
