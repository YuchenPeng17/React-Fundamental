import React, { Component } from "react";

import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    usersList: [],
    isFirst: true,
    isLoading: false,
    error: ''
  };

  updateState = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        <Search updateState = {this.updateState}/>
        <List {...this.state} usersList = {this.state.usersList} />
      </div>
    );
  }
}
