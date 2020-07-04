import React, { Component } from 'react'

export default class list extends Component {
    state = {
        student: [
            {
                id: 10001,
                name: '小代',
                age: 18
            },
            {
                id: 10002,
                name: 'dyh2',
                age: 18
            },
            {
                id: 10003,
                name: 'dyh3',
                age: 18
            }
        ]
    }
    toInfo(obj){
        // 动态路由
        // this.props.history.push('/index/user/' + obj.id)
        // 查询参数
        this.props.history.push({
            pathname:'/index/user/info',
            search:`id=${obj.id}&name=${obj.name}&age=${obj.age}`
        })
    }
    render() {
        return (
            <div>
                <h1>学生信息列表</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.student.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                onClick={() => this.toInfo(item)}
                                            >操作</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
