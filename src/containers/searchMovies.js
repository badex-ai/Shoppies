import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../components/store/actions/index'

function SearchMovies(props) {

  const [title, setTitle] = useState({value:''});

  const inputChangeHandler=(e)=>{
    setTitle({value: e.target.value})
    // console.log(title)

  }

  const onSearchHandler=(e)=>{
    e.preventDefault()
    // console.log(title.value);
    props.onSearchMovie(title.value)
  }
  

    return (
        <div>
          <form onSubmit={(e)=>onSearchHandler(e)}>
          <input type="text" name="title" onChange={(e)=>{inputChangeHandler(e)}} value={title.value} placeholder="enter title of movie"></input>
          <button type="submit" > search</button>
        </form>
        </div>
    )
}

SearchMovies.propTypes = {

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

export default connect(mapStatetToProps,mapDispatchToProps)(SearchMovies)

