import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        sum: 300
    }
    // 挂载完成关闭状态
    componentDidMount(){
        // 子组件获取到父组件传递的数据是100 而不是父组件挂载完成后更新的数据66 会发生计算错误
        // this.setState({
        //     sum:this.props.num + this.state.sum
        // })
        // 第一个参数 自身状态 第二个参数 父组件传递的新数据
        this.setState((state,props)=>{
            console.log(state,props,11)
            // 返回一个对象 给setState
            return {
                sum:state.sum + props.num
            }
        })
    }
    render() {
        return (
            <div>
                <h1>item组件</h1>
                <h3>结构：{this.state.sum}</h3>
            </div>
        )
    }
}
