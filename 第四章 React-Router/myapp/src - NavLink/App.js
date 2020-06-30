import React, { Fragment } from 'react';
import { Route, NavLink, useLocation } from 'react-router-dom';
const navData = [
  {
      pathName:"/",
      style:{color:"red"},
      title:"首页",
      render(){
        return <div>首页视图内容</div>
      }
  },
  {
    pathName:"/about",
    style:{color:"red"},
    title:"关于我们",
    render(){
      return <div>关于我们视图内容</div>
    }
  }
];
function Nav(){
    let {pathname} = useLocation();
    return <nav>
        {navData.map(item=>{
            return <NavLink 
              key={item.pathName}
              to={item.pathName} 
              activeStyle={item.style}
              isActive={()=>{
                  return pathname === item.pathName;
              }}
            >{item.title}</NavLink>
        })}
    </nav>
}
function App() {
  return <Fragment>
        <Nav />
        {navData.map(item=>{
            return <Route key={item.pathName} path={item.pathName} exact render={item.render} />
        })}
  </Fragment>;
}
export default App;
