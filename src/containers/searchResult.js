import React,{ useState } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classes from './searchResult.css'
import * as actions from '../components/store/actions/index';
import AddIcon from '../components/icons/add_icon';
import TickIcon from '../components/icons/tick_icon';

export const SearchResult = (props) => {

    const [nominated, setNominated] = useState(false);

    const onNominateMovie=()=>{
        if(props.nominationComplete){
            return
        }else{
            
            let nomList = props.nominationList
            if(nomList.length === 0 ){
                setNominated(true)
                props.onSetNominatedMovie(props.movieInfo)
            }
            if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                if(nomList.length > 0 ){
                
                    

                    if(nominated === false){
                        setNominated(true)
                        if(!nomList.includes(props.movieInfo)){
                            props.onSetNominatedMovie(props.movieInfo)
                        }
                    }else{
                        setNominated(false)
                        props.onRemoveNominated(props.movieInfo)
                    } 
                }
               }
               else{
                if(nomList.length > 0 && !nomList.includes(props.movieInfo)){
                
              
                    setNominated(true)
                    props.onSetNominatedMovie(props.movieInfo)
                }
               }  
            }
            ;
        
         
        // props.onNominate()

    }


    

    let tag= nominated && props.nominationList.includes(props.movieInfo) ?  
        <TickIcon/>
     : 
  
      <AddIcon/>

    return (
        <li className={classes.movie} onClick={()=>{onNominateMovie()}}>
            <div className={classes.movieInfo}>
                <p className={classes.title}>{props.title}</p>
                <p className={classes.year}>{props.movieInfo.Year}</p>
                <p className={classes.tag}>{tag}</p>
            
            </div>
            
           {/* <img src={props.movieInfo.Poster} alt="Logo" /> */}
        </li>
        
    )
}

// SearchResult.propTypes = {
//     // props: PropTypes
// }

const mapStateToProps = (state) => ({
    
    nominatedMovie: state.searchResults.nominated,
    moviesResults: state.searchResults.moviesResults,
    nominationComplete: state.nominatedMovies.nominationComplete,
    nominationList: state.nominatedMovies.nominatedMovies,
    
})

const mapDispatchToProps = (dispatch) => (
    {
        onNominate: () => dispatch(actions.nominateMovie()),
        onSetNominatedMovie: (movie)=>dispatch(actions.setNominatedMovie(movie)),
        onRemoveNominated: (movie)=>dispatch(actions.removeMovie(movie))
       
    }
)
    


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
