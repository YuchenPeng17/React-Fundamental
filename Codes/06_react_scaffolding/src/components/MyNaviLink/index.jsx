import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export default class MyNaviLink extends Component {
  render() {
    console.log("MyNaviLink Props: ", this.props);
    return (
      <NavLink activeClassName="ActiveNow" className="list-group-item" {...this.props} />
    )
  }
}
