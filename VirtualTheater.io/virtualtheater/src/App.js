import React, {Component} from 'react';
import Movie from './components/Movie';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        signedIn: false,
        movieId:0,
        user:{},
      }
      this.signingIn = this.signingIn.bind(this);
      this.chooseMovie = this.chooseMovie.bind(this);
}

signingIn(id){
  {/* update the ymbol in state */}
  this.setState({signedIn: true,user:id});
  //console.log(this.state.user);
}
chooseMovie(movieID){
  this.setState({movieId: movieID});
}
render(){
  return (
    <div>
      {this.state.signedIn ?
            <BrowserRouter>
                <Navbar />
                <Route exact strict path="/" render={() => <div><Search capture={this.chooseMovie}/></div>} />
                <Route path="/Profile" render={() => <div><Profile /></div>} />
                <Route path="/Movie" render={() => <div><Movie id={this.state.movieId} userId={this.state.user.id} balance={this.state.user.balance} user={this.state.user}/></div>} />
            </BrowserRouter>
            
        :
            <BrowserRouter>
                <Route exact strict path="/" render={() => <div><SignIn Allowed={this.signingIn}/></div>} />
                <Route path="/SignUp" render={() => <div><SignUp/></div>} />
            </BrowserRouter>
        }
      <div>
        <h4>Information provided by</h4>
        <img alt="themoviedb" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"/>
      </div>
    </div>
  );
}
  
}


