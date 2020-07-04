import React from 'react'
import './App.css';

// flux状态管理器
// import Home from './fluxstore/home'
// import User from './fluxstore/user'

// redux状态管理
import Home from './reduxstore/home'
export default ()=>{
  return(
      <div>
        <Home/>
        <hr/>
        {/* <User/> */}
      </div>
  )
}