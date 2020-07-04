import React from 'react'
import './App.css';

// 引入路由内置组件 设置路由规则
import { Switch,Route,Redirect } from 'react-router-dom'

// 路由使用
import Index from './components/pages/index'
import Login from './components/pages/login'

export default ()=>{
  return(
      <Switch>
        {/* Route 是具体路由规则，需要设置路由关键词 和 对应的组件 */}
        <Route path='/index' component={Index}></Route>
        <Route path='/login' component={Login}></Route>
        <Redirect path="*" to='/index'></Redirect>
      </Switch>
  )
}