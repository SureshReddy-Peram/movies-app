import React from "react";
import './MovieCard.css';

const MovieCard = ({movie}) => {

  const {name,year, imdb_rating, duration, genre, img_link, director_name, cast_name} = movie;
  return (
    <div>
      <div className="card" title={cast_name}>
        <div className="card-img-top">
          <img
            className="card-img"
            src={img_link}
            alt="movie poster"                      
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
          <span>Genre:{genre} </span>
          </p>
          <p className="card-text">
            <span>IMDb Rating: {imdb_rating} </span>   
            <span>{duration} mins</span>                    
          </p>
          <p className="card-text">
            <span>Director: {director_name}</span>
          </p>
          <p className="card-text"> 
            <span>Year: {year}</span>
          </p>
          {/* <p className="card-text">
            <span>Cast: {cast_name}</span>
          </p> */}
       
        </div>
       </div>     

      {/* <div className="card">
        <div className="card-img-top">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0"
            alt="movie poster"                      
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">The Shawshank Redemption</h5>
          <p className="card-text">
          <span>Genre:Drama, Crime </span>
          </p>
          <p className="card-text">
            <span>IMDb Rating:7.0 </span>   
            <span> 2h 30mins</span>          
          </p>
          
        </div>
      </div> */}
    </div>
  );
};

export default MovieCard;
