import * as actionTypes from './actionTypes';

export const setNominatedMovie=(nominatedMovie)=>{
    return {
        type: actionTypes.SET_NOMINATED_MOVIE,
        selectedMovie: nominatedMovie
    }
}


export const removeMovie =(selectedMovie)=>{
    return {
        type: actionTypes.REMOVE_MOVIE,
        selectedMovie: selectedMovie
    }
}