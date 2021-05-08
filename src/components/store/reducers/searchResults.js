import * as actionTypes from '../actions/actionTypes';
import updateState from '../../shared/utility';

const initialState={
    moviesResult: null,
    error: false,
    loading: false,
    nominated: false

}

const searchMovie=(state, action)=>{
    const updatedState= {error: false, loading: true};
    return updatedState(state, updatedState )
    

}
// const fetchMoreMovies=(state, action)=>{
//     const updatedState= {error: false, loading: true};
//     return updatedState(state, updatedState )
    

// }

// const fetchMoreMovies=(state,action)=>{

// }

const searchMoviesFailed =(state,action)=>{
   const  updatedState={error: true, loading: false}
    return updateState(state,updatedState)
}

const setMovies = (state,action)=>{
    const  updatedState={moviesResult: action.moviesResult , loading: false};
    return updateState(state,updatedState)
}
const setMoreMovies=(state,action)=>{
    const newArray = state.moviesResult.slice();
    newArray.splice(newArray.length, 0, action.moviesResult);
   const updatedState={moviesResult: newArray};
   return updateState(state,updatedState)

}

const nominateMovie= (state,action)=>{
    const updatedState={nominated: true};
    return updateState(state,updatedState)

}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.NOMINATE_MOVIE: return nominateMovie(state,action)

        case actionTypes.SEARCH_MOVIE: return searchMovie(state, action)

        // case actionTypes.FETCH_MORE_MOVIES: return fetchMoreMovies(state, action)

        case actionTypes.SEARCH_MOVIE_FAILED: return searchMoviesFailed(state,action)
        
        case actionTypes.SET_MOVIES: return setMovies(state,action)

        case actionTypes.SET_MORE_MOVIES: return setMoreMovies(state,action)

        default: return  state
    }
}

export default reducer
