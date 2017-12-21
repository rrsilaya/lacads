import React, { Component } from 'react';

import Login from '../features/auth/Login';
import Gwa from '../features/gwa/Gwa';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  render() {
    return (
      <div>
        {
          this.state.user ?
          <div className="container"><Gwa/></div>
          :
          <Login/>
        }
      </div>
    );
  }
}

export default App;
