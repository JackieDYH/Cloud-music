// 类组件展示父组件的数据 子组件
import React, { Component } from 'react'
import './child.css'
export default class Child extends Component {
    add(id){
        // console.log(this,111)
        this.props.addPar(id)
    }
    render() {
        // console.log(this,111) 里面有props
        return (
            <div className="item">
                <img className="img" src={this.props.obj.img} alt={this.props.obj.title} />
                <p>{this.props.obj.title}</p>
                <p>点赞:{this.props.obj.zanNum}</p>
                {/* 操作父组件数据 子父组件通讯 通过自定义函数实现 */}
                <button onClick={()=>this.add(this.props.id)}>点赞</button>
            </div>
        )
    }
}