import React from 'react';
import './MovieForm.css'

const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(this.state),
};

const url = "https://post-a-form.herokuapp.com/api/movies/";

fetch(url, config)
.then(res => res.json())
  .then(res => {
    if (res.error) {
      alert(res.error);
    } else {
      alert(`Movie #${res} has been successfully added!`);
    }
  }).catch(e => {
    console.error(e);
    alert('There was an error when adding the movie.');
  });

class MovieForm extends React.Component {
  constructor() {
    super()
    this.state= {
      movieName: '',
      urlMoviePoster: '',
      comment: ''
    }
  }

  submitForm = (e) => {
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({
      [e.target.movieName]: e.target.value
    })
  }

  render() {
    return(
      <div className="MovieForm">
        <h1>New Employee</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="movieName">Movie's Name</label>
              <input
                type="text"
                id="movieName"
                name="movieName"
                onChange={this.onChange}
                value={this.state.movieName}
              />
            </div>

            <div className="form-data">
              <label htmlFor="urlMoviePoster">Movie's Poster</label>
              <input
                type="text"
                id="urlMoviePoster"
                name="urlMoviePoster"
                onChange={this.onChange}
                value={this.state.urlMoviePoster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <input
                type="textarea"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default MovieForm;