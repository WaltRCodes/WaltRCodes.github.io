import React, { Component } from 'react';
import axios from 'axios';
export default class LeaveReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isFillingOutForm: false,
          rating:0,
          description:''

        }
        {/*binds the function to the class*/}
        this.handleClick = this.handleClick.bind(this);
        //put this:event.preventDefault(); in the new form submitting function
        this.submitForm = this.submitForm.bind(this);
        this.takeRating = this.takeRating.bind(this);
        this.takeDescription = this.takeDescription.bind(this);
  }
  componentDidUpdate(){
    //console.log(document.getElementById('rating').value,document.getElementById('description').value);
    if(this.state.isFillingOutForm){
        document.getElementById('rating').value=this.props.rating;
        document.getElementById('desc').value=this.props.desc;
    }
    
  }

  takeRating(event){
    {/* update the ymbol in state */}
    this.setState({rating: parseFloat(event.target.value)});
  }

  takeDescription(event){
    this.setState({description: event.target.value});
  }

  handleClick() {
    {/*acts a trigger between form and button*/}
    this.setState(prevState => ({
        isFillingOutForm: !prevState.isFillingOutForm
    }));
  }
  async postApi(object) {
    try {
      //const response = await axios.post('https://cors-anywhere.herokuapp.com/https://nameless-dawn-18115.herokuapp.com/walter_api/v2/ingredients',object);
      const response = await axios.post('/walter_api/v3/reviews',object);
      console.log(response.data);
      console.log(response);
      
    } catch (e) {
      console.log(e);
    }
  }

  submitForm(event){
    event.preventDefault();
    {/*submit form and creates comment*/}
    let review = {
        "id": this.props.reviewId,
        "description": this.state.description,
        "date": new Date().toUTCString(),
        "rating": this.state.rating,
        "userId": this.props.userId,
        "movieId": this.props.movieId
    };
    this.postApi(review);
    this.setState(prevState => ({
        isFillingOutForm: !prevState.isFillingOutForm
    }));
  }
  
  render() {
    return (
        this.state.isFillingOutForm ?
        <div>
            <form onSubmit={this.submitForm}>
                <label>
                    Rating:
                    <input type="number" onChange={this.takeRating} id="rating" placeholder="0.0"/>
                    <br />
                </label>
                <label>
                    Comment:
                    <input type="text" onChange={this.takeDescription} id="desc" placeholder="Comment"/>
                    <br />
                </label>
                <label>
                    <input type="submit" value="Submit"/>
                </label>
                
            </form>
        </div>
      :
        <div>
            <button onClick={this.handleClick}>{this.props.bttonText}</button>
        </div>
      
    )
  }
}