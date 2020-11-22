import React, { Component } from 'react'
import axios from 'axios';
import LeaveReview from './LeaveReview';
import {Link} from "react-router-dom";
export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      movieHTML:'',
      reviewHTML:'',
      users:[],
      purchase:''
         
    }
   
  }
  async callApi() {
    let calls = [axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`),axios.get(`https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/reviews`),axios.get(`https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/accounts`),axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`)];
    axios.all(calls).then(axios.spread((...responses) => {
      // const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`);
      // const response2 = await axios.get(`https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/reviews`);
      // const response3 = await axios.get(`https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/accounts`);
      // const response4 = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`);
      
      
    let movie = responses[0].data;
    let users = responses[2].data;
    let reviews = responses[1].data.filter(review => review.movieId === movie.id);
    let genres = responses[3].data["genres"];
    console.log(genres.filter(genre=>genre.name==="Action")[0]);
    let rating = 0;
      for(let review of reviews){
        rating+=review.rating;
      }
    
    console.log(rating, reviews.length);
    console.log(movie);
      console.log((Math.round(window.innerWidth/100)*100).toString());
    
    let movieHTML = <div className="container" >
        <div style={{background: `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`, width: "100%", backgroundAttachment: "fixed",  backgroundPosition: "center",  backgroundRepeat: "no-repeat",  backgroundSize: "cover", gridArea:"fade"}}>
          <div className="header" >
            <h1>{movie.title}</h1>
            <h5>({movie.release_date.substring(0, 4)}) {movie.runtime} mins</h5>
          </div>

        </div>
        
            <div className="poster"> <img id="post" src={"https://image.tmdb.org/t/p/w400"+movie.poster_path} /> </div>
            
            <div className="info">
              
              
              <div className="description">{rating===0||reviews.length===0 ? <p>no reviews yet</p>:<p>{new Array(rating/reviews.length).fill(<span>&#9733;</span>)} - {reviews.length} ratings</p>}<p>{movie.overview}</p></div>
              <div className="title"><a href={movie.homepage} target="_blank">Check out the movie website to learn more</a></div>
              
              <div className="buy">
            <button onClick={() => {
                if(this.props.balance-19.99>0){
                this.postDatabase("transactions",{
                    "title": movie.title,
                    "date": new Date().toUTCString(),
                    "image": "https://image.tmdb.org/t/p/w200"+movie.poster_path,
                    "price": 19.99,
                    "userId": this.props.userId,
                    "movieId":this.props.id
                    });
                this.postDatabase("accounts",{
                    "id": this.props.userId,
                    "balance": this.props.balance-19.99,
                    "email": this.props.user.email,
                    "password": this.props.user.password,
                    "name": this.props.user.name,
                    "address": this.props.user.address
                });
                console.log(this.props.balance-19.99);
                this.setState({purchase:<p>Congrats on your purchase!</p>});
                alert("Congrats on your purchase!");
            } else {
                    this.setState({purchase:<p>You dont have the neccessary funds</p>});
                    alert("You dont have the neccessary funds or are not logged in");
                }
            }}>Buy the movie for $19.99</button>
            <button onClick={() => {
                if(this.props.balance-9.99>0){
                this.postDatabase("transactions",{
                    "title": movie.title,
                    "date": new Date().toUTCString(),
                    "image": "https://image.tmdb.org/t/p/w200"+movie.poster_path,
                    "price": 9.99,
                    "userId": this.props.userId,
                    "movieId":this.props.id
                    });
                this.postDatabase("accounts",{
                    "id": this.props.userId,
                    "balance": this.props.balance-9.99,
                    "email": this.props.user.email,
                    "password": this.props.user.password,
                    "name": this.props.user.name,
                    "address": this.props.user.address
                });
                console.log(this.props.balance-9.99);
                this.setState({purchase:<p>Congrats on your purchase! You have 30 days to watch this movie</p>});
                alert("Congrats on your purchase! You have 30 days to watch this movie.");
            } else {
                    this.setState({purchase:<p>You dont have the neccessary funds</p>});
                    alert("You dont have the neccessary funds or are not logged in");
                }
            }}>Rent the movie for $9.99</button>
            {this.state.purchase}
        </div>
        <div className="post">
          <LeaveReview bttonText="Leave a review" filling={false} userId={this.props.userId} reviewId={null} movieId={this.props.id} rating={""} desc={""}/>
        </div>
        <div className="multiples genre" ><ul><li className="column-head" >GENRE </li>{movie.genres.map(genre => <Link to="/" onClick={() => this.props.getFilter(genres.filter(gen=>gen.name===genre.name)[0].id,genres.filter(gen=>gen.name===genre.name)[0].name)} ><li>{genre.name}</li></Link>)}</ul></div>
              <div className="multiples production" ><ul> <li  className="column-head" >PRODUCED BY</li>{movie.production_companies.map(company => <li>{company.name}</li>)}</ul></div>
              <div className="multiples countries" ><ul><li  className="column-head" >PRODUCED IN</li>{movie.production_countries.map(country => <li>{country.name}</li>)}</ul></div>
        </div>
        
        <h3 className="review">Reviews</h3></div>;

    let reviewsHTML = reviews.map(review => <div className="comments" id={review.id}>
        {console.log(users.filter(user => user.id===review.userId))}
        <div>
          <p>{users.filter(user => user.id===review.userId)[0].name}</p>
          <div>{new Array(review.rating).fill(<span>&#9733;</span>)}</div>
          <p>{review.date.substring(0,16)}</p>
          <p>{review.description}</p>
        </div>
        
        
        {(users.filter(user => user.id===review.userId)[0].id === this.props.userId) ? <div>
            
            <LeaveReview bttonText="Edit your post" filling={true} userId={this.props.userId} reviewId={review.id} movieId={this.props.id} rating={review.rating} desc={review.description}/>
            <button onClick={() => {this.deleteApi("reviews",review.id);document.getElementById(review.id).style.display="none";}}>Delete your post</button>
        </div>
        : <div></div>}
        </div>); 
      this.setState({
        movieHTML: movieHTML, reviewHTML:reviewsHTML
      })
    })).catch(errors => {
      console.log(errors);
    })
  }

  componentDidMount() {
      this.callApi();
}
  

async postDatabase(term,object) {
    try {
      const response = await axios.post('https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/'+term,object);
      
      console.log(response.data);
      console.log(response);
      
    } catch (e) {
      console.log(e);
    }
  };

 
  async deleteApi(term,id) {
    console.log("This is running",id);
    try {
      //const response = await axios.delete('https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v2/'+term+'/'+id);
      const response = await axios.delete('https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/'+term+'/'+id);
      
      console.log(response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  


  render() {
    return (
      <div className="movie">
            {this.state.movieHTML}
            
            <div>{this.state.reviewHTML}</div>
      </div>
      
    )
  }
}