import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'

export default class home extends Component {
    render() {
        return (
            <div>
               <h1>home页面</h1> 
               <Link to='/user'>User页面</Link>
               <NavLink to='/user'>User页面</NavLink>
            </div>
        )
    }
}
