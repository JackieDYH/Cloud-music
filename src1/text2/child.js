// 子组件
import React, { Component } from 'react'

export default class Child extends Component {
    // 渲染期
    constructor() {
        super()
        console.log('子组件构造函数执行...')
    }
    render() {
        console.log('子组件渲染了...')
        return (
            <div>
                <h1>child子组件</h1>
                <p>接收到父组件数据:{this.props.msg}</p>
            </div>
        )
    }
    UNSAFE_componentWillMount() {
        console.log('子组件将要挂载...')
    }
    componentDidMount() {
        console.log('子组件挂载完成...')
    }

    // 更新期
    shouldComponentUpdate() {
        console.log('子组件是否要更新数据？...')
        return true
    }
    UNSAFE_componentWillUpdate() {
        console.log('子组件将要更新数据...')
    }
    componentDidUpdate() {
        console.log('子组件数据更新完成...')
    }

    // 放子组件 会自动执行 放父组件不会自动执行
    UNSAFE_componentWillReceiveProps() {
        console.log('子组件将要接收父组件传递的数据...')
    }

     // 页面销毁期
    componentWillUnmount(){
        console.log('子组件将要被销毁...')
    }
}
