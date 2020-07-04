// 类组件 在父组件展示的数据 子组件
import React, { Component } from 'react'
import './child.css'
export default class Home extends Component {
    send(){
        // console.log(this)
        // 触发自定义事件
        this.$bus.emit('send','home数据')
    }
    render() {
        // console.log(this,111) 里面有props
        return (
            <div className="item">
                <h1>home 非父子通讯</h1>
                <button onClick={()=>this.send()}>发送</button>
                <p>11</p>
                <p>点赞:2</p>
                {/* 操作父组件数据 子父组件通讯 通过自定义函数实现 */}
            </div>
        )
    }
}