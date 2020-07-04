import React, { Component } from 'react'

export default class child extends Component {
    state = {
        num: 1
    }
    render() {
        return (
            <div>
                <h1>child子组件</h1>
                <p>num:{this.state.num}</p>
            </div>
        )
    }
}
