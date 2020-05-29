import {Link} from "react-router-dom";
import React, { Component } from 'react';
import axios from 'axios';


export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          accounts: [],
          password:'',
          error:'',
          email:''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.signInHandler = this.signInHandler.bind(this);
    }

    componentDidMount() {
        {/* call the api on page load */}
        this.callApi();
    }
    async callApi() {
        try {
            const response = await axios.get('/walter_api/v3/accounts');
            //console.log(response.data);
            {/* store api data in state */}
            this.setState({accounts:response.data});
        } catch (e) {
        console.log(e);
        }
    }
    
    signInHandler = (event) => {
        event.preventDefault();
        // auth.signInWithEmailAndPassword(email, password).catch(error => {
        // setError("Error signing in with password and email!");
        //   console.error("Error signing in with password and email", error);
        // });
        let arrayIndex =this.state.accounts.findIndex(user => user.email===this.state.email&&user.password===this.state.password);
        if(arrayIndex!=-1){
            console.log(this.state.accounts[arrayIndex].id);
            //this.props.Allowed(this.state.accounts[arrayIndex].id);
        } else{
            this.setState({error: <div>Sorry, no login was found</div>});
        }


      };
      onChangeHandler = (event) => {
          //const {name, value} = event.currentTarget;
        
          if(event.target.name === 'userPassword'){
            this.setState({password:event.target.value});
          } else if(event.target.name === 'email'){
            this.setState({email:event.target.value});
          }
      };

      render() {
        return (
            <div className="main">
              <h1>Sign In</h1>
              <div >
                {this.state.error}
                <form>
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
                    Password:
                  </label>
                  <input
                    type="password"
                    name="userPassword"
                    placeholder="Password"
                    onChange = {this.onChangeHandler}
                  />
                  <button onClick = {this.signInHandler}>
                    Sign in
                  </button>
                </form>
                 <Link to="/SignUp">Don't have an account? Sign up here
                  </Link>
              </div>
            </div>
          );
      }
  
};
