import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {

  static propTypes = {
    addtodos: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const {keyCode, target} = event;
    if(keyCode !== 13) return;
    if(target.value.trim() === ''){
      alert("Do not enter blank content");
      return;
    }
    const todoobj = {id: nanoid(), name: target.value, done: false};
    this.props.addtodos(todoobj);
    target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="Please enter your task name, hit Enter to add"></input>
      </div>
    )
  }
}
