import React, { Component } from 'react';
import './style.css';

class Login extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div>
          <h1 className="subbed">Login</h1>
          <span className="sub">Login to continue to your account.</span>

          <div className="auth-buttons">
            <button className="primary">Facebook</button>
            <button className="primary">Github</button>
          </div>

          <hr/>

          <div className="auth-footer">
            <span>LAcads</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;