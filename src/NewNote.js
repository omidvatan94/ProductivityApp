import React, { PureComponent } from 'react';

class NewNote extends PureComponent {

  render() {
    return (
      <div>
        Create A New Note:
        <form>
          Title: <input type="text" name="title"/><br/>
          Body: <input type="text" name="body"/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}

export default NewNote;
