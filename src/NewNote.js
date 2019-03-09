import React, { PureComponent } from 'react';

class NewNote extends PureComponent {

  state = {
    title: "",
    body: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addNote = (note, e) => {
    e.preventDefault()
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    })
    .then(res => res.json())
    .then(console.log)

  }


  render() {
    console.log(this.state)
    return (
      <div>
        Create A New Note:
        <form onChange={this.handleChange} onSubmit={(e) => this.addNote(this.state, e)}>
          Title: <input type="text" name="title" value={this.state.title}/><br/>
          Body: <input type="text" name="body" value={this.state.body}/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}

export default NewNote;
