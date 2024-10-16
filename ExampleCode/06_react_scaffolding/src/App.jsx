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

    render() {
        const {todos} = this.state
        // console.log("App.js");
        // console.log(todos);
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header />
                    <List todos={todos}/>
                    <Footer />
                </div>
            </div>
        )
    }
}
