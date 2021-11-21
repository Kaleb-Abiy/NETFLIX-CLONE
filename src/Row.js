import React, {useState, useEffect} from 'react';
import "./Row.css";
import axios from './axios';
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"


const base_url = "https://image.tmdb.org/t/p/original"
function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const opts = {
        heighr: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        }
      }

    const handleClick = (movie) => {
        if(trailerUrl){
          setTrailerUrl('')
        }else {
          movieTrailer(movie?.title || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get('v'))
          })
          .catch((error) => console.log(error))
        }
      }


    
    // console.log(movies)
    return (
        <div className="row">
          <h3>{title}</h3> 
          <div className = "row__posters">
             {movies?.map((movie)=> (
                 <img
                 onClick={() => handleClick(movie)}
                 className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                 src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                // src = {'${base_url}${movies.poster_path}'}
                 alt={movie.name}
                 />
             ))}
            
          </div>
          <div style={{ padding: "40px"}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
         </div>
        </div>
    )
}

export default Row;
