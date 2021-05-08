import * as actionTypes from './actionTypes'
import axios from 'axios';


export const searchMoviesFailed=()=>{
    return {
        type: actionTypes.SEARCH_MOVIE_FAILED
    }
}

export const searchMoviesSuccess=()=>{
    return{
        type: actionTypes.SEARCH_MOVIE_SUCCESS
    }
}

export const setMovies=(movies)=>{
    return{
        type: actionTypes.SET_MOVIES,
        moviesResult: movies
    }
}
export const setMoreMovies=(movies)=>{
    return{
        type: actionTypes.SET_MORE_MOVIES,
        moviesResult: movies
    }
}

export const nominateMovie=(movie)=>{
    return{
        type: actionTypes.NOMINATE_MOVIE,
        selectedMovie: movie
    }
}

export const searchMovie=(movieTitle)=>{
    return dispatch=>{
     
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_ombd_API}&s=${movieTitle}`).then(
            response=>{
               
                dispatch(setMovies(response.data))
            }
        ).catch(error=>{ 
          dispatch(searchMoviesFailed()) 
        })
    }
    
}


export const fetchMoreMovies=(movieTitle,page)=>{
    return dispatch=>{
     
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_ombd_API}&s=${movieTitle}&page=${page}`).then(
            response=>{
               
                dispatch(setMoreMovies(response.data))
            }
        ).catch(error=>{ 
          dispatch(searchMoviesFailed()) 
        })
    }
    
}



