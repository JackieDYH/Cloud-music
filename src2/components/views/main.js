import React, { Component } from 'react'

import Left from './main_left'
import Right from './main_right'

export default class main extends Component {
    render() {
        return (
            <div className="main">
               <Left/>
               <Right/>
            </div>
        )
    }
}
