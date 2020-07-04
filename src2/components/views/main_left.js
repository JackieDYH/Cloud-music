import React, { Component } from 'react'
import '../../common/css/main_left.css'
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'


export default class main_left extends Component {
    render() {
        return (
            <div className="left">
                <div className="navbar">
                    {/* <Link to='/index/user/list'>学生管理</Link>
                    <Link to='/index/user/info'>课程管理</Link> */}
                    <NavLink to='/index/user'>学生管理</NavLink>
                    <NavLink to='/login'>跳转登录</NavLink>
                </div>
            </div>
        )
    }
}
