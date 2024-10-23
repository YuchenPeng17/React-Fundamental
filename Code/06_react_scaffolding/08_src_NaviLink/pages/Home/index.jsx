import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        console.log("Home Props: ", this.props)
        return (
            <h2>Home Page</h2>
        )
    }
}
