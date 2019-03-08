import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DarkSkyApi from 'dark-sky-api'

class App extends Component {

  state = {
    response: {}
  }

  render() {

    DarkSkyApi.apiKey = 'a10e2251ba5b1dc81cc591194eaa43b7';
    DarkSkyApi.proxy = true;
    DarkSkyApi.loadForecast()
  .then(result => console.log(result));
    return (

      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
