import React, { Component } from 'react'

import './index.css'
export default class Footer extends Component {
  
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }
  
  handleDeleteFinished = () => {
    this.props.deleteFinished();
  }

  render() {
    const {todos} = this.props;

    const doneCount = todos.reduce((pre, todo)=>pre + (todo.done? 1 : 0) , 0);
    const todoCount = todos.length;
    return (
      <div className="todo-footer">
        <label>
            <input type='checkbox' onChange={this.handleCheckAll} checked={doneCount===todoCount && todoCount!== 0 ? true : false}/>
        </label>
        <span>
            <span>Finished {doneCount} </span> / Total {todoCount}
        </span>
        <button onClick={this.handleDeleteFinished} className='btn btn-danger'>Clear Finished Tasks</button>
      </div>
    )
  }
}
