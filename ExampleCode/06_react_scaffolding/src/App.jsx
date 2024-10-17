import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'
export default class App extends Component {

    state = {
        todos: [
            {id: '001', name: 'Eat', done: true}, 
            {id: '002', name: 'Sleep', done: true}, 
            {id: '003', name: 'Coding', done: false}, 
        ]
    }

    addtodos = (todoObj) => {
        const {todos} = this.state;
        console.log(todoObj);
        const newtodos = [todoObj, ...todos];
        this.setState({todos: newtodos});
    }
    render() {
        const {todos} = this.state
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addtodos={this.addtodos}/>
                    <List todos={todos}/>
                    <Footer />
                </div>
            </div>
        )
    }
}
