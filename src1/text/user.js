// 用户信息收集练习
import React, { Component } from 'react';

export default class User extends Component {
  state = {
    isidx: -1,
    empty: true,
    user: {
      name: '',
      age: '',
    },
    info: []
  }
  // 输入框数据绑定
  iptChange(e, item) {
    // console.log(e.target.value);
    let data = this.state.user;
    data[item] = e.target.value;
    this.setState(data)
  }
  // 提交
  submit() {
    if (this.state.user.name === '' || this.state.user.age === '') {
      alert("内容不能为空！")
      return false;
    };
    let info = this.state.info;
    // 判断 提交 修改
    if (this.state.isidx === -1) {
      info.push(JSON.parse(JSON.stringify(this.state.user)));
    } else {
      info.splice(this.state.isidx, 1, JSON.parse(JSON.stringify(this.state.user)))
    }
    this.setState({ info }, () => {
      this.reset();
    });
    this.empty();
    console.log(this.state);
  }
  // 重置
  reset() {
    this.setState({
      user: { name: '', age: '', },
      isidx: -1
    })
  }
  // 编辑
  edit(id) {
    console.log(id);
    this.setState({ isidx: id }, () => {
      let user = JSON.parse(JSON.stringify(this.state.info[id]));
      this.setState({ user })
    })
  }
  // 删除
  del(id) {
    
    let info = JSON.parse(JSON.stringify(this.state.info));
    info.splice(id, 1);
    this.setState({ info },()=>{
      this.empty();
    })
    console.log(this.state)
  }
  // 判断数组是否为空
  empty() {
    if (this.state.info.length === 0) {
      this.setState({
        empty: true
      })
      // return 'block';
    } else {
      this.setState({
        empty: false
      })
      // return 'none';
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">用户信息收集</h1>
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="username" className="col-sm-2 control-label">姓名：</label>
            <div className="col-sm-6">
              <input type="text" id="username"
                className="form-control"
                autoComplete="off"
                value={this.state.user.name}
                onChange={(e) => this.iptChange(e, 'name')}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userage" className="col-sm-2 control-label">年龄：</label>
            <div className="col-sm-6">
              <input type="text" id="userage"
                className="form-control"
                autoComplete="off"
                value={this.state.user.age}
                onChange={(e) => this.iptChange(e, 'age')}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userage" className="col-sm-2 control-label"></label>
            <div className="col-sm-6">
              <input type="button" value="提交"
                className="btn btn-primary"
                onClick={() => this.submit()}
              />
              <input type="button" value="重置"
                className="btn"
                onClick={() => this.reset()}
              />
            </div>
          </div>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>姓名</th>
              <th>年龄</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.info.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td className="col-sm-3  text-center">
                      <button className="btn btn-primary" onClick={() => this.edit(idx)}>编辑</button>
                      <button className="btn btn-danger" onClick={() => this.del(idx)}>删除</button>
                    </td>
                  </tr>
                )
              })
            }
            {/* <tr className="text-center" style={{display:this.empty()}}>
              <td colSpan="3" >尚无用户信息显示！！</td>
            </tr> */}
            {
              this.state.empty ? (
                <tr className="text-center">
                  <td colSpan="3" >尚无用户信息显示！！</td>
                </tr>
              ):null
            }
          </tbody>
        </table>
      </div >
    )
  }
}