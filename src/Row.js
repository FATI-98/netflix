
import React, {useEffect, useState} from 'react'
import './row.css'
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

function Row({title,fetchUrl,isLargeRow=false}) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState('');
    const baseUrl="https://image.tmdb.org/t/p/original/";
    useEffect(() => {
       async function fetchData(){
           const request=await axios.get(fetchUrl);
           setMovies(request.data.results);
           return request;
       }
       fetchData();
    }, [fetchUrl])
    console.log('movies :',movies);
    const handleTrailer=(movie)=>{
        if (trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.original_title|| "").then((url)=>{
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error)=>console.log('trailer is unvaillable',error));
        }
    }
    const opts={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        }
    };
    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-posters'>
            {movies.map((movie)=>(
                (isLargeRow && movie.poster_path )||
                (!isLargeRow && movie.backdrop_path ))&&(
                <img 
                 className={`row-poster ${isLargeRow && 'row-posterlarge'}`}
                 key={movie.id}
                 onClick={()=>handleTrailer(movie)}
                 src={`${baseUrl}${
                     isLargeRow ? movie.poster_path : movie.backdrop_path
                 }`} 
                 alt={movie.name}
                />
               )
            )}

            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>

    )
}

export default Row
