import React from 'react';
import '../App.css';
import MovieItem from './movieItems';

export class Movies extends React.Component {

  render() {
    return this.props.movies.map( (movie)=>{
        return <MovieItem movie={movie}></MovieItem>
    })
  }
}

