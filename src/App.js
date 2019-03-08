import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch("https://api.darksky.net/forecast/a10e2251ba5b1dc81cc591194eaa43b7/37.8267,-122.4233", {
      mode: "no-cors"
    })
    .then(res => res.json())
    .then(console.log)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
