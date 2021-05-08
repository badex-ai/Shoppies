import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classes from './searchResult.css'
import * as actions from '../components/store/actions/index';

export const searchResult = (props) => {

    const onNominateMovie=()=>{
       // console.log(props.movieInfo);
        if(props.nominationComplete){
            return
        }else{
            
            let nomList = props.nominationList
            console.log(nomList)
            if(nomList.length > 0 && !nomList.includes(props.movieInfo)){
                console.log('ok it is greater')
              console.log() 
                
                props.onSetNominatedMovie(props.movieInfo)
            }
            if(nomList.length === 0 ){
                props.onSetNominatedMovie(props.movieInfo)
            }
                
            }
            ;
        
         
        // props.onNominate()

    }

    return (
        <div className={classes.movie} onClick={()=>{onNominateMovie()}}>
            <div className={classes.movieInfo}>
                <div><p>{props.title}</p></div>
                <div>tag</div>
            
            </div>
            
           {/* <img src={props.movieInfo.Poster} alt="Logo" /> */}
        </div>
        
    )
}

searchResult.propTypes = {
    // props: PropTypes
}

const mapStateToProps = (state) => ({
    
    nominatedMovie: state.searchResults.nominated,
    moviesResults: state.searchResults.moviesResults,
    nominationComplete: state.nominatedMovies.nominationComplete,
    nominationList: state.nominatedMovies.nominatedMovies
})

const mapDispatchToProps = (dispatch) => (
    {
        onNominate: () => dispatch(actions.nominateMovie()),
        onSetNominatedMovie: (movie)=>dispatch(actions.setNominatedMovie(movie))
    }
)
    


export default connect(mapStateToProps, mapDispatchToProps)(searchResult)
