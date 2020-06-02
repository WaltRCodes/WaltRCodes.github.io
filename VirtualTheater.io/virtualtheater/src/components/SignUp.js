import {Link} from "react-router-dom";
import React, { Component } from 'react';
import axios from 'axios';


export default class SignUpPage  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            name:'',
            password:'',
            error:'',
            email:'',
            address:'',
          }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.createUserHandler = this.createUserHandler.bind(this);
  }
  

  createUserHandler = (event) => {
    event.preventDefault();
    
    let user = {
        "email": this.state.email,
        "password": this.state.password,
        "address": this.state.address,
        "name": this.state.name,
        "balance":10000
    };
    
    this.postApi(user);
    this.setState({message:<p>Congrats, your profile was created successfully</p>});
  };

  onChangeHandler = (event) => {
    //const { name, value } = event.currentTarget;

    if(event.target.name === 'name') {
        this.setState({name:event.target.value});
    }
    else if(event.target.name === 'userPassword'){
      this.setState({password:event.target.value});
    } else if(event.target.name === 'email'){
      this.setState({email:event.target.value});
    } else if(event.target.name === 'address'){
      this.setState({address:event.target.value});
    }
  };

  async postApi(object) {
    try {
      const response = await axios.post('https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/accounts',object);
      
      console.log(response.data);
      console.log(response);
      
    } catch (e) {
      console.log(e);
    }
  };

 
  render() {
    return (
        <div className="main">
          <h1>Sign Up</h1>
          <div>
            {this.state.message}
            <form>
            <label>
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange = {this.onChangeHandler}
                  />
                  <label>
                    Password:
                  </label>
                  <input
                    type="password"
                    name="userPassword"
                    placeholder="Password"
                    onChange = {this.onChangeHandler}
                  />
                  <label>
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange = {this.onChangeHandler}
                  />
                  <label>
                    Address:
                  </label>
                  <input
                    type="address"
                    name="address"
                    placeholder="address"
                    onChange = {this.onChangeHandler}
                  />
              <button onClick={this.createUserHandler}>
                Sign up
              </button>
            </form>
        
            <Link to="/">Already have an account? Sign in here</Link>
          </div>
        </div>
      );

  }
  
};
