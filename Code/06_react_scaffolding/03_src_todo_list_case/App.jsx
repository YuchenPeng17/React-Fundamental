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
            {id: '004', name: 'Shopping', done: false}, 
        ]
    }

    addtodos = (todoObj) => {
        const {todos} = this.state;
        const newtodos = [todoObj, ...todos];
        this.setState({todos: newtodos});
    }

    updatetodos = (id, done) => {
        let {todos} = this.state;
        // Arrays Only: map is only available on arrays, Returns an Array: map will always return a new array
        // map processes every element in the array and collects all returned values
        const newTodos = todos.map((todoobj) => {
            if(todoobj.id === id) return {...todoobj, done:done};
            else return todoobj;
        });
        this.setState({todos: newTodos});
    }

    deletetodo = (id) => {
        let {todos} = this.state;
        // create a new array that includes only the elements of the original array that satisfy a specific condition.
        const newTodos = todos.filter((todoobj) => {
            return todoobj.id !== id;
        });
        this.setState({todos: newTodos});
    }
    
    checkAllTodo = (done) => {
        let {todos} = this.state;
        const newTodos = todos.map((todoobj) => {
            return {...todoobj, done:done};
        });
        this.setState({todos: newTodos});
    }

    deleteFinished = () => {
        let {todos} = this.state;
        // create a new array that includes only the elements of the original array that satisfy a specific condition.
        const newTodos = todos.filter((todoobj) => {
            return todoobj.done !== true;
        });
        this.setState({todos: newTodos});
    }


    render() {
        const {todos} = this.state
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addtodos={this.addtodos}/>
                    <List todos={todos} updatetodos={this.updatetodos} deletetodo={this.deletetodo}/>
                    <Footer deleteFinished={this.deleteFinished} checkAllTodo={this.checkAllTodo} todos={todos}/>
                </div>
            </div>
        )
    }
}
