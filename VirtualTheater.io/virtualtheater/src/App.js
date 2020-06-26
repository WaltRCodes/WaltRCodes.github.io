import React, {Component} from 'react';
import Movie from './components/Movie';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import './App.scss';
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
    <div className="alternative-grid">
      {this.state.signedIn ?
            <BrowserRouter>
                <Navbar />
                <Route exact strict path="/" render={() => <div><Search capture={this.chooseMovie} userName={this.state.user.name}/></div>} />
                <Route path="/Profile" render={() => <div><Profile capture={this.chooseMovie} userId={this.state.user.id} userName={this.state.user.name} userEmail={this.state.user.email} userAddress={this.state.user.address} userPassword={this.state.user.password} userBalance={this.state.user.balance}/></div>} />
                <Route path="/Movie" render={() => <div><Movie id={this.state.movieId} userId={this.state.user.id} balance={this.state.user.balance} /></div>} />
                <div className="main">
                  <h4>Information provided by TheMoviedb</h4>
                </div>
            </BrowserRouter>
            
        :
            <BrowserRouter>
                <Route exact strict path="/" render={() => <div><SignIn Allowed={this.signingIn}/></div>} />
                <Route path="/SignUp" render={() => <div><SignUp/></div>} />
            </BrowserRouter>
        }
    </div>
  );
}
  
}


