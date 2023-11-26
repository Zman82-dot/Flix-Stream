import React from 'react';
const API_URL = "https://youtube.googleapis.com/youtube/v3/search?part=GET%20https%3A%2F%2Fwww.googleapis.com%2Fyoutube%2Fv3%2Fsearch&key=[AIzaSyC5sUItm78TqSM0GV4ThI9hFA-yfefN_WY] HTTP/1.1"

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title}  />
      </div>

      <div>
        <span>{Type}</span>
        <h3><a href= "https://www.youtube.com/results?search_query=movies">{Title}</a></h3>
      </div>
    </div>
  );
}

export default MovieCard;