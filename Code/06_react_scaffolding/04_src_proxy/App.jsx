import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {

    handleClickStudent = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => {
                console.log('Success', response.data);
            },
            error => {
                console.log('Fail', error);
            }
        )
    }

    handleClickCar = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => {
                console.log('Success', response.data);
            },
            error => {
                console.log('Fail', error);
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickStudent}>Click me for students data</button>
                <button onClick={this.handleClickCar}>Click me for car data</button>
            </div>
        )
    }
}
