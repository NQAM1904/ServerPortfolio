import React, { Component } from 'react'
import './App.css';
import MenuContainer from './containers/MenuContainer';
import routes from './containers/routes';
import { Switch, Route } from 'react-router-dom';
export class App extends Component {

  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />)
      });
    }
    return <Switch>{result}</Switch>
  }
  render() {
    return (
      <div>
        <MenuContainer />
        <div className="container">
          {this.showContent(routes)}
        </div>
      </div>
    )
  }
}

export default App
