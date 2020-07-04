import React, { Component } from 'react'
// 引入flux仓库
import store from './store'
export default class user extends Component {
    setAge(){
        console.log(store,444)
        store.dispatcher.dispatch({
            type:'changeAge',
            params:66
        })
    }
    componentDidMount(){
        store.state.on('change',()=>{
            this.setState({})
        })
    }
    render() {
        return (
            <div>
                <h2>user页面</h2>
                <h3>flux仓库中name:{store.state.name}</h3>
                <h3>flux仓库中age:{store.state.age}</h3>
                <button className="btn btn-primary" onClick={()=>this.setAge()}>改变age</button>
            </div>
        )
    }
}
