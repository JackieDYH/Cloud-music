import React,{Component} from 'react'

// 引入页面组件
import Header from '../views/header'
import Main from '../views/main'
import Footer from '../views/footer'

export default class index extends Component{
    render(){
        return(
            <div className="page">
                {/* 路由组件渲染的页面props内有路由信息 */}
                {/* <button onClick={()=>console.log(this)}>路由信息</button> */}
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}