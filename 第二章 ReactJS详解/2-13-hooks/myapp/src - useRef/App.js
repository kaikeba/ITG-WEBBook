import React, { useRef } from 'react';
function App() {
  let elP = useRef();
  return <div>
      <p ref={elP}>欢迎学习开课吧 WEB 教程</p>
      <button onClick={()=>{
          console.log(elP.current);
      }}>显示全称</button>
  </div>;
}
export default App;
