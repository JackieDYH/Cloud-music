import React,{Component} from 'react'
import Item from './item'
export default class Home extends Component{
    state={
        num:100
    }
    componentDidMount(){
        // 挂载完成后，子组件没有收到新数据
        this.setState({
            num:66
        })
    }
    render(){
        return(
            <div>
                <h1>父组件--{ this.state.num }</h1>
                <Item num={ this.state.num }/>
            </div>
        )
    }
}