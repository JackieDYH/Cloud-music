// 项目启动文件
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入路由模块 history路由模式
// import { BrowserRouter } from 'react-router-dom'
// HashRouter路由模式 地址栏上面有#
import { HashRouter } from 'react-router-dom'

// 引入antdUI库样式
import 'antd/dist/antd.css'
// 引入样式重置文件
import './assets/css/reset.css'
import './assets/js/rem.js'

// 引入阿里巴巴矢量图标
import './assets/iconfont/iconfont.css'

// 引入axios网络请求
import axios from 'axios';
// 引入公共容器
import bus from './bus';

Component.prototype.$axios = axios;
Component.prototype.$bus = bus;

ReactDOM.render(
  // history模式
  // <BrowserRouter><App /></BrowserRouter>
  // hash模式 地址栏有#
  <HashRouter><App /></HashRouter>
  , document.getElementById('root')
);

