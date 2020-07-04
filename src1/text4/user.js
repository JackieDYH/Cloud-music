import React,{Component} from 'react'
import { Link,NavLink } from 'react-router-dom'
export default class Uset extends Component{
    render(){
        console.log(this)
        return(
            <div>
               <h1>user页面</h1> 
               <Link to='/home'>Home页面</Link>
                <NavLink to='/home'>home页面</NavLink>
            </div>
        )
    }
}