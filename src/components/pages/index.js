import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'

import Recommend from './recommend'
import Hotsong from './hotsong'
import Search from './search'

import '../../assets/css/index.css'

export default class Index extends Component {
    render() {
        return (
            <div className="app">
                <div className="fixed">
                    <div className="top">
                        <div className="left">
                            <i className="iconfont icon-yinle"></i>
                            <span>享心音乐</span>
                        </div>
                        <span className="btnapp">下载APP</span>
                    </div>
                    <div className="nav">
                        <NavLink to='/index/recommend'>
                            <div className="tabtxt">
                                <span>推荐音乐</span>
                            </div>
                        </NavLink>
                        <NavLink to='/index/hotsong'>
                            <div className="tabtxt">
                                <span>热歌榜</span>
                            </div>
                        </NavLink>
                        <NavLink to='/index/search'>
                            <div className="tabtxt">
                                <span>搜索</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="page">
                    <Switch>
                        <Route path='/index/recommend' component={Recommend} />
                        <Route path='/index/hotsong' component={Hotsong} />
                        <Route path='/index/search' component={Search} />
                        <Redirect path='*' to='/index/recommend' />
                    </Switch>
                </div>
            </div>
        )
    }
}
