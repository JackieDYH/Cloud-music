// 项目启动文件
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入路由模块 路由模式
import { BrowserRouter } from 'react-router-dom'

// 引入公共容器
import bus from './text1/bus';
Component.prototype.$bus = bus;


// <React.StrictMode></React.StrictMode> 严格模式
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root')
);

