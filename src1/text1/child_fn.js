// 类组件展示父组件的数据 子组件
import React from 'react'
import './child.css'

// 使用传参方式
export default (props) => {
    // 没有this
    // console.log(this,props)
    return (
        <div className="item">
            <img className="img" src={props.obj.img} alt={props.obj.title} />
            <p>{props.obj.title}</p>
            <p>{props.obj.zanNum}</p>
        </div>
    )
}