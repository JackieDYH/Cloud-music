// 父组件
import React,{ Component } from 'react'
import Child from './child'

// 钩子函数执行顺序和编写顺序无关

export default class Parent extends Component{
    // 页面渲染期
    constructor(){
        super()
        this.state = {
            msg:'',
            showChild:true
        }
        console.log('构造函数执行了-constructor...')
    }
    // 严格模式下 不建议使用
    UNSAFE_componentWillMount(){
        console.log('组件将要挂载-componentWillMount...');
        
    }
    render(){
        console.log('页面渲染了-render...');
        let el = this.state.showChild ? <Child  msg={ this.state.msg }/> : null
        return(
            <div>
                <h1>parent组件</h1>
                <input type="text" value={this.state.msg} 
                    onChange={ (e)=>this.msgChange(e) }
                />
                <p>{ this.state.msg }</p>
                <button onClick={ ()=>this.setState({showChild:!this.state.showChild}) }>销毁</button>
                <hr/>
                {el}
            </div>
        )
    }
    componentDidMount(){
        console.log('组件挂载完成-componentDidMount...');
    }
    
    // 页面更新期
    shouldComponentUpdate(){
        console.log('=================')
        console.log('组件是否要更新数据吗？-shouldComponentUpdate...')
        // 返回true 可以更新数据 false 不更新数据
        return true;
    }
    UNSAFE_componentWillUpdate(){
        console.log('组件将要更新数据-componentWillUpdate...')
    }
    msgChange(e){
        // 更新数据
        console.log('数据正在更新中...')
        this.setState({
            msg:e.target.value
        })
    }
    // 还有个 render钩子函数 页面渲染
    componentDidUpdate(){
        console.log('组件数据更新完成-componentDidUpdate...')
    }
}