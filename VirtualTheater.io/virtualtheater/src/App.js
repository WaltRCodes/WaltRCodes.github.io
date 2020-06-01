import React from 'react';
import Movie from './components/Movie';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import './App.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Movie id="419704" />
      </BrowserRouter>
      
      <div>
        <h4>Information provided by</h4>
        <img alt="themoviedb" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"/>
      </div>
    </div>
  );
}

export default App;
