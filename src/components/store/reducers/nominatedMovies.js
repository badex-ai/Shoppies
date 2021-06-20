import * as actionTypes from '../actions/actionTypes';
import updateState from '../../shared/utility'

const initialState={
    nominatedMovies:[],
    nominationComplete: false
}

const setNominatedMovie=(state, action)=>{
 
            let newArray = state.nominatedMovies.slice()
           
           
            let updatedState;
            newArray.splice(0, 0, action.selectedMovie)
            if(newArray.length >= 5){
                updatedState={nominatedMovies: newArray,nominationComplete: true}
            }else{
                updatedState={nominatedMovies: newArray}
            }
            
             return updateState(state,updatedState)
        
        
  


}

const removeMovie =(state,action)=>{
   
   const newarr= state.nominatedMovies.filter((el,index) => {
        return el.imdbID !== action.selectedMovie.imdbID
        
    })
   
    const  updatedState={nominatedMovies: newarr, nominationComplete: false}
    return updateState(state,updatedState)
}

const reducer =(state = initialState, action)=>{
    switch (action.type){
        case actionTypes.SET_NOMINATED_MOVIE: return setNominatedMovie(state, action)


        case actionTypes.REMOVE_MOVIE: return removeMovie(state,action)

        default: return state
    }

}

export default reducer