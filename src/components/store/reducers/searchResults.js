import * as actionTypes from '../actions/actionTypes';
import updateState from '../../shared/utility';

const initialState={
    moviesResult: null,
    moviesTotal: null,
    error: false,
    nominated: false,

}

const searchMovie=(state, action)=>{
    const updatedState= {error: false};
    return updatedState(state, updatedState )
    

}
const fetchMoreMovies=(state, action)=>{
    const updatedState= {error: false};
    return updatedState(state, updatedState )
    

}



const searchMoviesFailed =(state,action)=>{
   const  updatedState={error: true}
    return updateState(state,updatedState)
}

const setMovies = (state,action)=>{
    console.log(action.moviesResult.Search)
    const  updatedState={moviesResult: action.moviesResult.Search , loading: {value: false}};
    return updateState(state,updatedState)
}

const setMoreMovies=(state,action)=>{

    // const updatedState={...state.moviesResult.Search,...action.moviesResult.Search};

    const newArray = state.moviesResult.slice();
    newArray.splice(newArray.length, 0,...action.moviesResult.Search);
    console.log(newArray)
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

        case actionTypes.FETCH_MORE_MOVIES: return fetchMoreMovies(state, action)

        case actionTypes.SEARCH_MOVIE_FAILED: return searchMoviesFailed(state,action)
        
        case actionTypes.SET_MOVIES: return setMovies(state,action)

        case actionTypes.SET_MORE_MOVIES: return setMoreMovies(state,action)

        default: return  state
    }
}

export default reducer
