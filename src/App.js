import React, { Component } from 'react';
import NewNote from './NewNote.js'
import './App.css';


class App extends Component {

  render() {
    return (

      <div>
        <img
        src="https://www.dejohnpetservices.com/wp-content/uploads/cats-animals-kittens-background.jpg"
        height="200"
        width="250"
        alt="good luck kitty of positivity"
        />
        <br/><br/>
        <NewNote />
      </div>
    );
  }
}

export default App;
