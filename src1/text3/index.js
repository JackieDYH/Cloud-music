import React,{Component} from 'react'
import Child from './child'
export default class Index extends Component{
    constructor(){
        super()
        this.childEl = React.createRef();//创建一个空的ref对象
    }
    
    render(){
        return(
            <div>
                {/* 1 字符串方式修改DOM节点 在组件的refs中存在 */}
                <h1 ref='myh1'>DOM节点操作</h1>
                {/* 2 回调函数方式 不依赖钩子函数 组件挂载完成 自己触发 组件的refs中不存在 */}
                {/* <Child ref={ (el)=>this.changeChild(el) }/> */}
                {/* 3 使用推荐的createRef */}
                <Child ref={ this.childEl }/>
            </div>
        )
    }
    changeChild(e){
        // e 是子组件本身
        console.log(this,e,e.state.num,'changeChild...')
        // e.state.num = 100; 不会从新渲染页面
        // 2 使用回调函数方式
        e.setState({num:100})
    }
    // 挂载完成
    componentDidMount(){
        // refs
        console.log(this,'挂载完成...')
        // 1 字符串方式修改DOM节点
        this.refs.myh1.innerHTML = 'refs直接赋值方式'
        // 3 使用createRef   this.childEl.current
        this.childEl.current.state.num = 500;
    }
}