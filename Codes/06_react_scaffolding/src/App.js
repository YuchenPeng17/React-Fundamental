import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MyNaviLink from "./components/MyNaviLink";
import About from "./pages/About";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 1.编写路由链接 */}
              <MyNaviLink to="/about">About</MyNaviLink>
              <MyNaviLink to="/home">Home</MyNaviLink>
              {/* <NavLink activeClassName="ActiveNow" className="list-group-item" to="/about">
                About
              </NavLink>

              <NavLink activeClassName="ActiveNow" className="list-group-item" to="/home">
                Home
              </NavLink> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 2.注册路由，定义关系 */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
