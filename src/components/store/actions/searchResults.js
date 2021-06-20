import * as actionTypes from './actionTypes'
import axios from 'axios';
// import searchMovies from '../../../containers/searchMovies';


export const searchMovieFailed=(error)=>{
    return {
        type: actionTypes.SEARCH_MOVIE_FAILED,
        error
    }
}

export const searchMovieSuccess=()=>{
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
export const setNoResult=()=>{
    
    return{
        type: actionTypes.SET_NO_RESULT
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

        
     
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=cf59c518&s=${movieTitle}`).then(
            response=>{
                
                dispatch(searchMovieSuccess())

                    dispatch(setMovies(response.data))
                
                
            }
        ).catch(error=>{ 
           
          dispatch(searchMovieFailed(error)) 
        })
    }
    
}


export const fetchMoreMovies=(movieTitle,page)=>{
    return dispatch=>{
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=cf59c518&s&s=${movieTitle}&page=${page}`).then(
            response=>{
                dispatch(searchMovieSuccess())
                dispatch(setMoreMovies(response.data))
            }
        ).catch(error=>{ 
          dispatch(searchMovieFailed(error)) 
        })
    }
    
}



