import * as actionTypes from '../actions/actionTypes';
import updateState from '../../shared/utility'

const initialState={
    nominatedMovies:[],
    nominationComplete: false
}

const setNominatedMovie=(state, action)=>{
//     console.log(state.nominatedMovies)
 
            let newArray = state.nominatedMovies.slice()
           // console.log(newArray)
            // newArray.forEach(element => {
            //   return console.log(element) 
            // });
            // if(newArray.length > 1){
            //     newArray.array.forEach(element => {
            //         console.log(element)
            //        // action.selectedMovie.imdbID == element.
            //     });
            // }
           
            let updatedState;
            newArray.splice(0, 0, action.selectedMovie)
            if(newArray.length >= 5){
                updatedState={nominatedMovies: newArray,nominationComplete: true}
            }else{
                updatedState={nominatedMovies: newArray}
            }
            
             return updateState(state,updatedState)
        
        
  
//   newArray.splice(newArray.length, 0, action.selectedMovie)
//   return {...state,...{state.nominatedMovies: newArray}}

}

const removeMovie =(state,action)=>{
    // const selectedIndex = state.nominatedMovies.indexOf(action.selectedMovie)
    // console.log(selectedIndex);
   const newarr= state.nominatedMovies.filter((el,index) => {
        return el.imdbID !== action.selectedMovie.imdbID
        
    })
    // console.log(newarr)
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