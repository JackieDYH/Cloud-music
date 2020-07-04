import React from 'react'
import './App.css';
// 用户信息收集-text
// import User from './text/user'
// 事件绑定-text
// import Jsxtext from './text/jsxtext'
// 父子组件通讯-text1
// import Parent from './text1/parent'
// 非父子通讯-text1
// import Home from './text1/home'

// 生命周期钩子函数-text2
// import Parent from './text2/parent'

// DOM节点操作-text3
// import Index from './text3/index'

// state和props混用-text3
// import Home from "./text3/home";

// 路由使用-text4
import Home from './text4/home'
import User from './text4/user'

// 引入路由内置组件 设置路由规则
import { Switch,Route } from 'react-router-dom'

export default ()=>{
  return(
    <div>
      {/* <User /> */}
      {/* <Jsxtext /> */}
      {/* <Home/> */}
      {/* <Parent /> */}
      {/* <Index/> */}
      {/* 设置路由出口  相当于vue中 router-vier */}
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/user' component={User}></Route>
      </Switch>
    </div>
  )
}