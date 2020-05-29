import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class PasswordReset extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message:''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.sendResetEmail = this.sendResetEmail.bind(this);
}


  onChangeHandler = (event) => {
    this.setState({email: event.target.value});
  };

  sendResetEmail = (event) => {
    event.preventDefault();
    
  };
  render(){
    return (
        <div className="main">
          <h1>
            Reset your Password
          </h1>
          <div>
            <form>
                <div>{this.state.message}</div>
              <label>
                Email:
              </label>
              <input
                type="email"
                placeholder="Input your email"
                onChange={this.onChangeHandler}
              />
              <button onClick={this.sendResetEmail}>
                Send me a reset link
              </button>
            </form>
            <Link to="/">back to sign in page</Link>
          </div>
        </div>
      );

  }
  
};

