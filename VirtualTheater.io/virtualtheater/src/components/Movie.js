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
      users:[],
      purchase:''
         
    }
   
  }
  async callApi() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`);
      const response2 = await axios.get(`https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/reviews`);
      const response3 = await axios.get(`https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v3/accounts`);
      
      
    let movie = response.data;
    let users = response3.data;
    let reviews = response2.data.filter(review => review.movieId === movie.id);

    console.log(reviews);
    console.log(movie);
      console.log((Math.round(window.innerWidth/100)*100).toString());
    
    let movieHTML = <div className="container" >
        <div style={{background: `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`, width: "100%", backgroundAttachment: "fixed",  backgroundPosition: "center",  backgroundRepeat: "no-repeat",  backgroundSize: "cover"}}>
          <div className="header" >
            <h1>{movie.title}</h1>
            <h5>{movie.release_date}</h5>
            <div>{movie.runtime} mins</div>
          </div>

        </div>
        
        <div className="row">
            <div> <img src={"https://image.tmdb.org/t/p/w400"+movie.poster_path} /> </div>
            
            <div>
              
              
              <div className="multiples" >Genre: {movie.genres.map(genre => <p>&nbsp; {genre.name} &nbsp;</p>)}</div>
              <div className="multiples" >Production provided by: {movie.production_companies.map(company => <p>&nbsp; {company.name} &nbsp;</p>)}</div>
              <div className="multiples" >Produced in the following countries: {movie.production_countries.map(country => <p>&nbsp; {country.name} &nbsp;</p>)}</div>
              <div><a href={movie.homepage} target="_blank">Check out the website for {movie.title}</a></div>
              <p>{movie.overview}</p>
              
            
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
            }
        }}>Buy the movie for $19.99</button>
        <div>{this.state.purchase}</div>
        <LeaveReview bttonText="Leave a review" filling={false} userId={this.props.userId} reviewId={null} movieId={this.props.id} rating={""} desc={""}/>
        </div>
        </div>
        <h3>Check out what our others users have said</h3></div>;

    let reviewsHTML = reviews.map(review => <div className="comments" id={review.id}>
        {console.log(users.filter(user => user.id===review.userId))}
        <div>
          <p>{users.filter(user => user.id===review.userId)[0].name}</p>
          <p>{review.date}</p>
        </div>
        <p>{review.rating} Stars</p>
        <p>{review.description}</p>
        {(users.filter(user => user.id===review.userId)[0].id === this.props.userId) ? <div>
            
            <LeaveReview bttonText="Edit your post" filling={true} userId={this.props.userId} reviewId={review.id} movieId={this.props.id} rating={review.rating} desc={review.description}/>
            <button onClick={() => {this.deleteApi("reviews",review.id);document.getElementById(review.id).style.display="none";}}>Delete your post</button>
        </div>
        : <div></div>}
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
            <div>{this.state.movieHTML}</div>
            
            <div>{this.state.reviewHTML}</div>
      </div>
      
    )
  }
}