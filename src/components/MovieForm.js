import React from 'react';
import { useState } from "react";
import './MovieForm.css'

const MovieForm = () => {
  const [movie, setMovie] = useState({
    title:"",
    poster:"",
    comment:""
  })

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    };
    const url = "https://post-a-form.herokuapp.com/api/movies/"
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Movie ${movie.title} has been successfully added!`);
        }
      }).catch(e => {
        console.error(e);
        alert('There was an error when adding the movie.');
      });
  };

  const onChange = (e) => {
    setMovie({
      ...movie, [e.target.name]: e.target.value
    })
  }

  return(
    <div className="MovieForm">
        <h1>New Movie</h1>

        <form onSubmit={submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="title">Movie's Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={onChange}
                value={movie.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Movie's Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={onChange}
                value={movie.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <input
                type="textarea"
                id="comment"
                name="comment"
                onChange={onChange}
                value={movie.comment}
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

export default MovieForm