import React, { Component } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      resultsHTML:'',
      movies:[]

         
    }
    {/* make all the mehods that will be utilized*/}
    this.makeSearch = this.makeSearch.bind(this);
    this.takeTerm = this.takeTerm.bind(this);
  }
  async callApi() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}`);
      
      console.log(response.data);
    let elements = response.data.results.map(movie => <Link to="/Movie" onClick={() => this.props.capture(movie.id)} >
    <div style={{background: `url("https://image.tmdb.org/t/p/w200${movie.poster_path}") no-repeat`}}><div className="cell"><h4>{movie.title}</h4><h5>{movie.release_date}</h5><p>{movie.overview}</p></div></div>
    </Link>);
      this.setState({
        resultsHTML: elements
      })
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
      this.callApi();
}
  

async postDatabase(term,object) {
    try {
      const response = await axios.post('/walter_api/v2/'+term,object);
      
      console.log(response.data);
      console.log(response);
      
    } catch (e) {
      console.log(e);
    }
  };

  makeSearch(event){
    event.preventDefault();
    
    
    this.callApi();
    
  }
  
  takeTerm(event){
    this.setState({searchTerm: event.target.value});
  }
 
  


  render() {
    return (
      <div className="main">
            <h1>Check out this awesome selection of movies</h1>
            <div className="grid">{this.state.resultsHTML}</div>
      </div>
      
    )
  }
}