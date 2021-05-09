import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../components/store/actions/index'
import classes from './nominatedMovies.css'

 function nominatedMovies(props) {



    return (
        <div className={classes.card} >
            <img src={props.movie.Poster} alt="" width="104px"/>
            <div className={classes.description}>
                <div className={classes.title}>
                <p>{props.movie.Title}</p>
                </div>
                <div className={classes.year}>
                <p>{props.movie.Year}</p>
                </div>
                <div className={classes.rating}>
                <svg id="star_Icon" data-name="star Icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <rect id="Rectangle_45" data-name="Rectangle 45" width="20" height="20" fill="none"/>
                <g id="Group_55" data-name="Group 55" transform="translate(0.477 1.001)">
                    <path id="Path_3" data-name="Path 3" d="M10.616,1.38l2.57,5.154,5.747.828a.685.685,0,0,1,.555.463.675.675,0,0,1-.174.7l-4.159,4.009.982,5.666a.678.678,0,0,1-.274.666.693.693,0,0,1-.724.052L10,16.244,4.86,18.917a.694.694,0,0,1-.724-.053.678.678,0,0,1-.274-.665l.982-5.663L.684,8.527a.675.675,0,0,1-.174-.7.685.685,0,0,1,.555-.463l5.747-.832,2.57-5.154a.692.692,0,0,1,1.234,0Z" transform="translate(-0.477 -1.001)" fill="#f5c517"/>
                </g>
                </svg>
                <p>{props.movie.Metascore}</p>
                </div>
            
            </div>
            
            <div className={classes.remove} onClick={()=>{props.onRemoveNominated(props.movie)}} >
            <svg id="Remove_Icon" data-name="Remove Icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <rect id="Rectangle_44" data-name="Rectangle 44" width="32" height="32" fill="none"/>
            <g id="Group_50" data-name="Group 50">
                <line id="Line_2" data-name="Line 2" x1="12" y2="12" transform="translate(10 10)" fill="none" stroke="#004c3f" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
                <line id="Line_3" data-name="Line 3" x1="12" y1="12" transform="translate(10 10)" fill="none" stroke="#004c3f" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
            </g>
            </svg>
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
