import React,{ useState } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classes from './searchResult.css'
import * as actions from '../components/store/actions/index';

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
                // console.log('mobile device');
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
                    // console.log(nominated)
                    props.onSetNominatedMovie(props.movieInfo)
                }
               }  
            }
            ;
        
         
        // props.onNominate()

    }


    

    let tag= nominated && props.nominationList.includes(props.movieInfo) ?  <div>
        <svg id="Tick_with_background" data-name="Tick with background" xmlns="http://www.w3.org/2000/svg" width="25" height="36" viewBox="0 0 36 25">
        <rect id="Rectangle_36" data-name="Rectangle 36" width="36" height="36" rx="18" fill="#004c3f"/>
        <g id="Tick_Icon" data-name="Tick Icon" transform="translate(2 2)">
          <rect id="Rectangle_42" data-name="Rectangle 42" width="32" height="32" fill="none"/>
          <g id="Group_39" data-name="Group 39">
            <path id="Path_2" data-name="Path 2" d="M9,17l4,4L23,11" fill="none" stroke="#fff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
          </g>
        </g>
          </svg>
    </div>  : 
  <div>
      <svg id="Add_Icon" data-name="Add Icon" xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 30 25">
        <rect id="Rectangle_38" data-name="Rectangle 38" width="30" height="30" fill="none"/>
        <g id="Group_22" data-name="Group 22" transform="translate(7.628 7.628)">
            <path id="Path_1" data-name="Path 1" d="M20.744,12.143H14.6V6H12.143v6.143H6V14.6h6.143v6.143H14.6V14.6h6.143Z" transform="translate(-6 -6)" fill="#004c3f"/>
        </g>
        </svg>
  </div>

    return (
        <div className={classes.movie} onClick={()=>{onNominateMovie()}}>
            <div className={classes.movieInfo}>
                <div className={classes.title}><p>{props.title}</p></div>
                <div className={classes.year}><p>{props.movieInfo.Year}</p></div>
                <div className={classes.tag}>
                    {tag}
                </div>
            
            </div>
            
           {/* <img src={props.movieInfo.Poster} alt="Logo" /> */}
        </div>
        
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
