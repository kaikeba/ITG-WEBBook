import React from "react";
import IndexView from "../view/index";
import AboutView from "../view/about";
import ListView from "../view/list";
import UndefinedView from "../view/404";
let routes=[{
    path:"/",
    exact: true,
    render(props){
        return <IndexView {...props}/>
    }   
},{
    path:"/about",
    exact: true,
    render(props){
        return <AboutView {...props}/>
    }   
},{
    path:["/list","/list/:page"],
    exact: true,
    render(props){
        let {page=1} = props.match.params;
        // 解构页码，如果没有传递页面设置默认值为 1。
        if(page >= 1){
            // 判断页面是否为 > 1 的数字，如 /list/a 等不是数字的情况下，则显示 404 视图
            return <ListView {...props}/>;
        }
        return <UndefinedView {...props}/>
    }   
},{
    path:"",
    exact: false,
    render(props){
        return <UndefinedView {...props}/>
    }   
}];
let navs = [
    {
        to:"/",
        exact: true,
        title:"首页"  
    },{
        to:"/about",
        exact: true,
        title: "关于"   
    },{
        to:"/list",
        title: "课程列表",
        isActive(url){
            let urlData = url.split("/"); 
            if(url === "/list"
            ||(urlData.length===3&&urlData[1] === "list"&&urlData[2]>0) ){
                // 判断 URL 为 "/list" 或 "/list/大于1的数字" 时，选中当前项，否则不选中 
                return true;
            }   
            return false;
        }   
    }
];
export {routes,navs};