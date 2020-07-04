import React, { Component } from 'react'
// 引入仓库
import store from './store'
export default class home extends Component {
    setName(){
        store.dispatch({
            type:'changeName',
            params:'修改了name'
        })
        store.dispatch({
            type:'changeAge',
            params:66
        })
        console.log(store.getState())
    }

    componentDidMount() {
        console.log(this,333)
        console.log(store,444)
        // 仓库数据变化 想要从新渲染页面,就要添加订阅者subscribe
        this.unsubscribe = store.subscribe(()=>{
            this.setState({})
        })
    }
    componentWillUnmount(){
        // 在页面销毁之前,取消订阅者 防止再次执行17行代码
        this.unsubscribe();
    }
    render() {
        return (
            <div>
                <h2>redux状态管理</h2>
                {/* 读取仓库数据 */}
                <p>redux仓库中的name:{store.getState().name}</p>
                <p>redux仓库中的name:{store.getState().age}</p>
                <button className="btn btn-primary" onClick={()=>this.setName()}>改变name</button>
            </div>
        )
    }
}
