import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

import './index.css'
export default class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        updatetodos: PropTypes.func.isRequired,
        deletetodo: PropTypes.func.isRequired
    }
    render() {
        const { todos } = this.props;
        return (
            <ul className='todo-main'>
                {
                    todos.map(todo => {
                        return <Item deletetodo={this.props.deletetodo} updatetodos={this.props.updatetodos} key={todo.id} {...todo}/>
                    })
                }
            </ul>
        )
    }
}
