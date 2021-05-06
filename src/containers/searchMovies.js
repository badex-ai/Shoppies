import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as actions from '../components/store/actions/index'

function searchMovies(props) {

  const onSearchHandler=()=>{
    props.onSearchMovie("space")
  }
  

    return (
        <div>
          <form>
          <input type="text" placeholder="enter title of movie"></input>
          <button type="button" onClick={onSearchHandler}> search</button>
        </form>
        </div>
    )
}

searchMovies.propTypes = {

}

const mapStatetToProps=(state)=>{
  return {
   
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    onSearchMovie: (movie)=> dispatch(actions.searchMovie(movie))
  }
}

export default connect(mapStatetToProps,mapDispatchToProps)(searchMovies)

