import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css'
import Home from './components/Home';
// import Pokeball from "./assets/Pokeball.PNG";

class App extends Component {
  render() {
    return (
      <div className="App Page">
        <Home />
      </div>
    );
  }
}

export default App;
