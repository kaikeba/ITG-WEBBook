import React, { useState } from 'react';
function App() {
  const [name,setName] = useState("kkb");
  return <div>
      <p>{name}</p>
      <button onClick={()=>{
        setName("开课吧");
        console.log(name);
      }}>显示全称</button>
  </div>;
}
export default App;
