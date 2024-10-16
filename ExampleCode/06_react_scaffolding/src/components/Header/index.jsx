import React, { Component } from 'react'

import './index.css'
export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input  type="text" placeholder="Please enter your task name, hit Enter to add"></input>
      </div>
    )
  }
}
