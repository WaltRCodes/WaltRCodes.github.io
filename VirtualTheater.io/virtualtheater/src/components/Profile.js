import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFillingOutForm: false,
            movies: [],
            name: this.props.userName,
            password: this.props.userPassword,
            error:'',
            email: this.props.userEmail,
            address: this.props.userAddress,
            balance: this.props.userBalance,
            occured: false,
            movieHTML:['']
          }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.createUserHandler = this.createUserHandler.bind(this);
        this.switchEdit = this.switchEdit.bind(this);
  }
  componentDidMount(){
      this.callApi();
      this.callUserApi();
  }

  componentDidUpdate(){
    //console.log(document.getElementById('rating').value,document.getElementById('description').value);
    if(!this.state.occured){
        document.getElementById('newname').value=this.state.name;
        document.getElementById('newuserPassword').value=this.state.password;
        document.getElementById('newemail').value=this.state.email;
        document.getElementById('newaddress').value=this.state.address;
        //document.getElementById('newbalance').value=this.state.balance;
        this.setState({occured:true});
    }
    
  }

  async callApi() {
    try {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/transactions');
        //console.log(response.data);
        {/* store api data in state */}
        let data = response.data.filter(movie => movie.userId === this.props.userId);
    let elements = data.map(movie => <Link to="/Movie" onClick={() => this.props.capture(movie.movieId)} ><img src={movie.image}/><p>{movie.price>10 ? 'Bought': 'Rented'} on {movie.date.substring(0, 17)} for ${movie.price}</p></Link>);
        this.setState({movies:response.data,movieHTML:elements});
    } catch (e) {
    console.log(e);
    }
}

async callUserApi() {
  try {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/accounts/'+this.props.userId);
      //console.log(response.data);
      {/* store api data in state */}
      let data = response.data;
      console.log(response.data);
      this.setState({
        name: data.name,
        password: data.password,
        email: data.email,
        address: data.address,
        balance: data.balance,
        occured:false
      });
  } catch (e) {
  console.log(e);
  }
}
  

  createUserHandler = (event) => {
    event.preventDefault();
    
    let user = {
        "id":this.props.userId,
        "email": this.state.email,
        "password": this.state.password,
        "address": this.state.address,
        "name": this.state.name,
        "balance":this.state.balance
    };
    
    this.postApi(user);
    this.setState(prevState => ({message:<p>Congrats, your profile was updated successfully.</p>, isFillingOutForm: !prevState.isFillingOutForm}));
   
  };

  onChangeHandler = (event) => {
    //const { name, value } = event.currentTarget;

    if(event.target.name === 'newname') {
        this.setState({name:event.target.value});
    }
    else if(event.target.name === 'newuserPassword'){
      this.setState({password:event.target.value});
    } else if(event.target.name === 'newemail'){
      this.setState({email:event.target.value});
    } else if(event.target.name === 'newaddress'){
      this.setState({address:event.target.value});
    } else if(event.target.name === 'newbalance'){
        this.setState({balance:event.target.value});
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

  switchEdit() {
    {/*acts a trigger between form and button*/}
    this.setState(prevState => ({
        isFillingOutForm: !prevState.isFillingOutForm
    }));
    
  }
  

  
  
  render() {
    return (
        <div className="spacing">
            <h3>{this.props.userName}, view and edit your profile info here:</h3>
            <div className="spacing">
                {this.state.message}
                <form  className="spacing profile">
                <label>
                        Name:
                    </label>
                    <input
                        type="text"
                        id="newname"
                        name="newname"
                        placeholder="name"
                        onChange = {this.onChangeHandler}
                    />
                    <label>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="newuserPassword"
                        name="newuserPassword"
                        placeholder="Password"
                        onChange = {this.onChangeHandler}
                    />
                    <label>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="newemail"
                        name="newemail"
                        placeholder="email"
                        onChange = {this.onChangeHandler}
                    />
                    <label>
                        Address:
                    </label>
                    <input
                        type="address"
                        id="newaddress"
                        name="newaddress"
                        placeholder="address"
                        onChange = {this.onChangeHandler}
                    />
                    
                    <button onClick={this.createUserHandler}>
                        Update
                    </button> <br />
                    <label>
                        Balance: ${this.state.balance}
                    </label>
                </form>
                </div>
        <h4>Here are the movies you have purchased</h4>
    <div  className="spacing">{this.state.movieHTML}</div>
            
        </div>
      
    )
  }
}