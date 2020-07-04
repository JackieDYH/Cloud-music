import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'

// 引入页面
import Userlist from '../pages/user/list'
import Userinfo from '../pages/user/info'

export default class main_right extends Component {
    render() {
        return (
            <div className="right">
                {/* 设置二级路由规则 */}
                <Switch>
                    {/* 
                        匹配规则默认是模糊匹配
                        模糊匹配时需要将长链接优先匹配 放在相同规则前面
                        若短路由设置严格匹配 exact 就不用放前面了
                    */}
                    <Route exact path="/index/user/" component={Userlist}></Route>
                    {/* 动态路由 */}
                    {/* <Route path="/index/user/:id" component={Userinfo}></Route> */}
                    {/* 查询参数 传递数据 */}
                    <Route path="/index/user/info" component={Userinfo}></Route>
                    <Redirect path="*" to="/index/user/list"></Redirect>
                </Switch>
            </div>
        )
    }
}
