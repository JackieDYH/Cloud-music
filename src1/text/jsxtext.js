// 事件练习
import React,{Component} from 'react'

export default class Jsxtext extends Component {
    state={
        time:new Date().toLocaleTimeString(),
        timer:null
    }
    // 开始
    start(){
        let t = setInterval(()=>{
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        },1000)
        this.setState({
            timer:t
        })
    }
    // 停止
    stop(){
        clearInterval(this.state.timer)
    }

    // 事件
    ck1(a,b){
        console.log(a,b,'ck1')
        console.log(this)
    }
    ck21(a,b,e){
        console.log(a,b,'ck1')
        console.log(this)
        console.log(e)
    }
    ck2(e,a,b){
        console.log(a,b,'ck1')
        console.log(this)
        console.log(e)
    }

    render(){
        return(
            <div>
                <p>当前时间：{this.state.time}</p>
                <button onClick={this.start.bind(this)}>开始</button>
                <button onClick={()=>this.stop()}>停止</button>
                <h1>事件绑定</h1>
                <button onClick={this.ck1.bind(this,222,333)}>点击-es5</button>
                <button onClick={()=>this.ck1(222,333)}>点击-es6</button>
                <h1>事件对象 es5的事件对象默认是最后一个，es6看传递的位置</h1>
                <button onClick={this.ck21.bind(this,222,333)}>点击-es5</button>
                <button onClick={(e)=>this.ck2(222,e,333)}>点击-es6</button>
            </div>
        )
    }
}