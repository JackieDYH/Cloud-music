import React, { Component } from 'react'

// 引入querystring 用于处理查询参数 安装插件
import querystring from 'querystring'

export default class info extends Component {
    state={}
    componentDidMount(){
        console.log(this.props.location.search)
        // 去掉问号
        let search = this.props.location.search.substr(1);
        let obj = querystring.parse(search);
        // 给状态赋值
        this.setState(obj)
        console.log(search,obj)
    }
    render() {
        return (
            <div>
                <h1>详情页</h1>
                <p>接到的学生编号:{this.props.match.params.id}</p>
                <p>接到的学生编号:{this.state.name}</p>
            </div>
        )
    }
}
