import React, { Component } from 'react'
import axios from 'axios';
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
    //   let elements = response.data.map(recipe => <Recipe id={recipe.id} search={true} editRecipe={''} title={recipe.title} image={recipe.image} 
    //     ingredients={recipe.missedIngredients.map(ingredient => <div>{ingredient.originalString}<div id={ingredient.id}><button onClick={() => {this.postDatabase("ingredients",{
    //     "id": this.state.ingredients.findIndex(stored => stored.name===ingredient.name)!=-1 ? this.state.ingredients[this.state.ingredients.findIndex(stored => stored.name===ingredient.name)].id:null,//put check here later and make button diappear
    //     "name": ingredient.name,
    //     "amount": this.state.ingredients.findIndex(stored => stored.name===ingredient.name)!=-1 ? this.state.ingredients[this.state.ingredients.findIndex(stored => stored.name===ingredient.name)].amount+ingredient.amount:ingredient.amount,
    //     "image": ingredient.image,
    //     "unit": ingredient.unit,
    //     "userId": this.props.id
    // }); document.getElementById(ingredient.id).innerHTML="Added Ingredient!";}}>Add this ingredient to your list</button></div></div>)}
    // addRecipe={() => {this.postDatabase("recipes",{
    //     "id": null,//put check here later and make button diappear
    //     "name": recipe.title,
    //     "image": recipe.image,
    //     "description": "null",
    //     "ingredients": recipe.missedIngredients.map(ingredient =>ingredient.originalString),
    //     "userId": this.props.id
    // }); document.getElementById(recipe.id).innerHTML="Added Recipe!";}}
    // />);
        {/* store the values in state*/}
    //   this.setState({
    //     resultsHTML: elements
    //   })
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
            <form onSubmit={this.makeSearch}>
            <h1>What Ingredients do you already have?</h1>
            <label>
                Search
                <input type="text" onChange={this.takeTerm} placeholder="search term"/>
            </label>
            <br />
            
            <br />
            <label>
                <input type="submit" value="Submit"/>
            </label>
          </form>
            <div className="grid">{this.state.resultsHTML}</div>
      </div>
      
    )
  }
}