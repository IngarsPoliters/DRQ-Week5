import React from 'react';
import '../App.css';

class Create extends React.Component {

  constructor() {
    super();
    // class binding to bind this instance
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);


    this.state = {
      Title: '',
      Year: '',
      Poster: ''
    }
  }
  //set the target value for "state.Title"
  onChangeTitle(e) {
    this.setState({
      Title: e.target.value
    });
  }

  onChangeYear(e) {
    this.setState({
      Year: e.taget.value
    })
  }

  onChangePoster(e) {
    this.setState({
      Poster: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    alert("Movie: " + this.state.Title + " Year: " + this.state.Year)
  }


  //form control to bind incoming user data
  // 3 input fields with "Add Movie" button 
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>Add Movie Title: </label>
            <input type='text'
              className="form-control"
              value={this.state.Title}
              onChange={this.onChangeTitle}></input>
          </div>

          <div className="form-group">
            <label>Add Movie Year: </label>
            <input type="text"
              className="form-control"
              value={this.state.Year}
              onChange={this.onChangeYear}></input>
          </div>

          <div className="form-group">
            <label>Movie Poster: </label>
            <textarea type="text"
              className="form-control"
              value={this.state.Poster}
              onChange={this.onChangePoster}>
            </textarea>
          </div>

          <div className="form-group">
            <input type='submit'
              value="Add Movie"
              className="btn btn-primary"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;