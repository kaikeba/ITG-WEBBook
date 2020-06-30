import React, { Fragment } from  "react";
import {navs} from "../route/router";
import { NavLink, useLocation } from "react-router-dom";
export default function Nav(){
    let {pathname} = useLocation();
    return <nav>
        <span> | </span>
        {
            navs.map(item=>{
                return <Fragment key={item.to}>
                    <NavLink 
                        to={item.to}
                        exact={item.exact}
                        isActive={item.isActive?()=>{
                            return item.isActive(pathname);
                        }:null}
                        activeStyle={{
                            color: "red"
                        }}
                    >{item.title}</NavLink>
                    <span> | </span>
                </Fragment>
            })
        }
    </nav>
}