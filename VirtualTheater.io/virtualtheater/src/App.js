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
        filter:null,
        filterName:'',
      }
      this.signingIn = this.signingIn.bind(this);
      this.chooseMovie = this.chooseMovie.bind(this);
      this.genreFilter = this.genreFilter.bind(this);
}

signingIn(id){
  {/* update the ymbol in state */}
  this.setState({signedIn: true,user:id});
  //console.log(this.state.user);
}
chooseMovie(movieID){
  this.setState({movieId: movieID});
}
genreFilter(newFilter,newFilterName){
  this.setState({filter: newFilter,filterName:newFilterName});
}
render(){
  return (
    <div className="alternative-grid">
      {this.state.signedIn ?
            <BrowserRouter>
                <div className="status">Logged in as {this.state.user.name}</div>
                <Navbar userName={this.state.user.name} />
                <Route exact strict path="/" render={() => <Search getFilter={this.genreFilter} filter={this.state.filter} filterName={this.state.filterName} capture={this.chooseMovie} userName={this.state.user.name}/>} />
                <Route path="/Profile" render={() => <Profile capture={this.chooseMovie} userId={this.state.user.id} userName={this.state.user.name} userEmail={this.state.user.email} userAddress={this.state.user.address} userPassword={this.state.user.password} userBalance={this.state.user.balance}/>} />
                <Route path="/Movie" render={() => <Movie getFilter={this.genreFilter} id={this.state.movieId} userId={this.state.user.id} balance={this.state.user.balance} user={this.state.user}/>} />
                <div className="footer">
                  <p>Information provided by TheMoviedb © 2020 Walter Rada</p>
                </div>
            </BrowserRouter>
            
        :
            <BrowserRouter>
                <Route exact strict path="/" render={() => <SignIn Allowed={this.signingIn}/>} />
                <Route path="/SignUp" render={() => <SignUp/>} />
            </BrowserRouter>
        }
    </div>
  );
}
  
}


