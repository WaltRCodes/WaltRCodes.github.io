import React, { Component } from 'react'
import axios from 'axios';
import LeaveReview from './LeaveReview';
export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      movieHTML:'',
      reviewHTML:'',
      users:[]
         
    }
   
  }
  async callApi() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`);
      const response2 = await axios.get(`/walter_api/v3/reviews`);
      const response3 = await axios.get(`/walter_api/v3/accounts`);
      
      
    let movie = response.data;
    let users = response3.data;
    let reviews = response2.data.filter(review => review.movieId === movie.id);

    console.log(reviews);
    console.log(response3.data);

    
    let movieHTML = <div >
        <div>
            <img src={"https://image.tmdb.org/t/p/w200"+movie.poster_path} />
            <h4>{movie.title}</h4>
            <h5>{movie.release_date}</h5>
            <div>Runtime: {movie.runtime} mins</div>
            <div>Genre: {movie.genres.map(genre => <p>{genre.name}</p>)}</div>
            <div><a href={movie.homepage} target="_blank">Check out the website for {movie.title}</a></div>
            <p>{movie.overview}</p>
            <div>Production provided by: {movie.production_companies.map(company => <p>{company.name}</p>)}</div>
            <div>Produced in the following countries: {movie.production_countries.map(country => <p>{country.name}</p>)}</div>
        </div>
        <button>Buy the movie for $19.99</button>
        <LeaveReview userId={this.props.userId} reviewId={null} movieId={movie.id}/>
        </div>;

    let reviewsHTML = reviews.map(review => <div>
        {console.log(users.filter(user => user.id===review.userId))}
        <p>{users.filter(user => user.id===review.userId)[0].name}</p>
        <p>{review.rating}</p>
        <p>{review.date}</p>
        <p>{review.description}</p>
        </div>); 
      this.setState({
        movieHTML: movieHTML, reviewHTML:reviewsHTML
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
      const response = await axios.post('/walter_api/v3/'+term,object);
      
      console.log(response.data);
      console.log(response);
      
    } catch (e) {
      console.log(e);
    }
  };

 
 
  


  render() {
    return (
      <div>
            <div>{this.state.movieHTML}</div>
            <h1>Check out what our others users have said</h1>
            <div>{this.state.reviewHTML}</div>
      </div>
      
    )
  }
}