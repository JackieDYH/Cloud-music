// 父组件
import React, { Component } from 'react'
// 使用类方法组件 使用this.props 实现
import Child from './child'
// 使用函数组件传递数据 组件中使用传参方式实现
// import Child from './child_fn'
export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            msg: ''
        }
    }
    // 组件挂载完成执行
    componentDidMount(){
        // 监听 自定义事件
        this.$bus.on('send', (str) => {
            // console.log(str)
            this.setState({
                msg: str
            })
        })
    }
    arr = [
        {
            id: 0,
            img: 'http://stdl.qq.com/stdl/me_center/production/44b62ec994796488a874b62533c8823c.png',
            title: '太阳',
            zanNum: 0
        },
        {
            id: 1,
            img: 'https://stdl.qq.com/stdl/me_center/main/static/img/lottery.35e4f9e.png',
            title: '抽奖',
            zanNum: 0
        },
        {
            id: 2,
            img: 'https://stdl.qq.com/stdl/me_center/main/static/img/gift-game.bbfae6b.png',
            title: '未必',
            zanNum: 0
        }
    ]
    // 操作数据的方法
    addZan(id) {
        // console.log(id, 111111)
        this.arr[id].zanNum++;
        this.setState({})
    }
    render() {
        let els = this.arr.map((item, idx) => {
            return (
                <Child key={idx} obj={item} id={idx}
                    addPar={(id) => this.addZan(id)}
                ></Child>
            )
        })
        return (
            <div>
                <h1>父组件</h1>
                <p>{this.state.msg}</p>
                {els}
            </div>
        )
    }
}