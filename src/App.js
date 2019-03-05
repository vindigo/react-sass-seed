import React, { Component } from 'react';
import './styles/base.scss';
import Navigation from './components/Navigation';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Menu />
      </div>
    )
  }
}

export default App