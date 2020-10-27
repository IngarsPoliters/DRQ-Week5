import React from 'react';
import '../App.css';
import { Movies } from './movies';
import axios from 'axios';

class Read extends React.Component {

  state = {
    movies: []
  };
  // component life cycle
  // using axios package to retreive information of resource
  // getting the data and setting it to movies array
  // errors will get logged and displayed
  componentDidMount() {
    axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
      .then((response) => {
        this.setState({ movies: response.data.Search })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="App">
        <h1>My Read in another component</h1>
        <Movies movies={this.state.movies}></Movies>
      </div>
    );
  }
}

export default Read;