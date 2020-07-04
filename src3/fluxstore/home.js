import React, { Component } from 'react'
// 引入flux仓库  还可以挂载到Component原型上 this.$store
// import store from './store'
export default class home extends Component {
    setName(){
        // console.log(store,33)
        this.$store.dispatcher.dispatch({
            type:'changeName',
            params:'修改了 flux'
        })
    }
    // 挂载完成
    componentDidMount(){
        console.log(this)
        this.$store.state.on('change',()=>{
            this.setState({})
        })
    }
    render() {
        return (
            <div>
                <h2>flux状态管理</h2>
                <h4>flux仓库中name:{this.$store.state.name}</h4>
                <h4>flux仓库中age:{this.$store.state.age}</h4>
                <button className="btn btn-primary" onClick={()=>this.setName()}>改变name</button>
            </div>
        )
    }
}
