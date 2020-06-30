import React from 'react';
import data from "../data/data";
const pegeLen = 3; // 每页多少条
export default function List(props){
    // 这里接收父级传递的 props ，props中必须包含 activePage
    // activePage 代表当前实现第几页
    let {activePage} = props;
    let start = (activePage-1)*pegeLen; // 当前页从第几条开始，注意页码从 1 开始计数，但是JS从0开始计数，所以减1。
    let end = activePage*pegeLen; // 当前页到第几条结束
    let nowData = data.filter((item,index)=>index>=start&&index<end);
    return <ul>
        {nowData.map(item=>{
            return (<li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.describe}</p>
            </li>)
        })}
    </ul>
}