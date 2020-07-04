import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class header extends Component {
    // 只有路由组件渲染出的页面才能拿到路由参数
    logout(){
        console.log(this)
        this.props.history.push('/login')
        // this.props.history.replace('/login')
        // this.props.history.go(-1)
        // this.props.history.goBack()
    }
    render() {
        return (
            <div className="header">
                <h3>后台管理中心</h3>
                <button className="btn btn-primary" onClick={()=>this.logout()}>退出</button>
            </div>
        )
    }
}
// 不是路由组件渲染的时候 可以通过 withRouter
export default withRouter(header)