import * as actionTypes from '../actions/actionTypes';
import updateState from '../../shared/utility'

const initialState={
    nominatedMovies:[],
    nominationComplete: false
}

const setNominatedMovie=(state, action)=>{
   const  updatedState={nominatedMovies: state.nominatedMovies.shift(action.selectedMovie)}
    return updateState(state,updatedState)

}

const removeMovie =(state,action)=>{
    const index = state.nominatedMovies.indexOf(action.selectedMovie)
    const updatedState={nominatedMovies: state.nominatedMovies.splice(index,1)};
    return updateState(state,updatedState)
}

const reducer =(state= initialState, action)=>{
    switch (action.type){
        case actionTypes.SET_NOMINATED_MOVIE: return setNominatedMovie(state, action)


        case actionTypes.REMOVE_MOVIE: return removeMovie(state,action)

        default: return state
    }

}

export default reducer