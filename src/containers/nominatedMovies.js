import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../components/store/actions/index'
import classes from './nominatedMovies.css'
import RemoveIcon from '../components/icons/remove_icon';
import StarIcon from '../components/icons/starIcon';
import DefaultMovImgIcon from '../components/icons/defaultMovimg_icon';



 function nominatedMovies(props) {
    let img = props.movie.Poster === "N/A"?  <div className={classes.defaultImg}>
        {/* <img src="../assets/clapperbrd.svg" alt="" />\ */}
        
             <div className={classes.defaultsvg}>
                <DefaultMovImgIcon/>
             </div>
        
    </div>: <img className={classes.img} src={props.movie.Poster} alt=""/>


    return (
        <div className={classes.card} >
            
            <div className={classes.description}>
                
                {img}
                <div className={classes.descriptCont}>
                    <div className={classes.title}>
                    <p>{props.movie.Title}</p>
                    </div>
                    <div className={classes.year}>
                    <p>{props.movie.Year}</p>
                    </div>
                    <div className={classes.rating}>
                    <StarIcon/>
                    <p>{props.movie.Metascore}</p>
                    </div>
                </div>  
            
            </div>
            
            <div className={classes.remove}  >
            <button className={classes.removeCont} onClick={()=>{props.onRemoveNominated(props.movie)}} >
                <RemoveIcon/>
            </button>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
    nominationComplete: state.nominatedMovies.nominationComplete
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onRemoveNominated: (movie)=>dispatch(actions.removeMovie(movie))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(nominatedMovies)
