import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../components/store/actions/index'

 function nominatedMovies(props) {



    return (
        <div onClick={()=>{props.onRemoveNominated(props.movie)}}>
            <p>{props.movie.Title}</p>
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
