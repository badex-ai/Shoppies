import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classes from './searchMovies.css'
import * as actions from '../components/store/actions/index'

function SearchMovies(props) {

  const [title, setTitle] = useState({value:''});

  const inputChangeHandler=(e)=>{
    setTitle({value: e.target.value})
    // props.onChange(title)
    // console.log(title)

  }

  const onSearchHandler=(e)=>{
    e.preventDefault()
    // console.log(title.value);
    props.onSubmit(title.value)
    props.onSearchMovie(title.value);
    // console.log(props.loadingState, "this checks the loading state");
    setTitle({value:''})
  }
  

    return (
        
          <form className={classes.form} onSubmit={(e)=>onSearchHandler(e)}>
          <input className={classes.input} type="text" name="title" onChange={(e)=>{inputChangeHandler(e)}} value={title.value} placeholder="Enter movie title"></input>
          {/* <button type="submit" > search</button> */}
        </form>
    )
}

// SearchMovies.propTypes = {

// }

const mapStatetToProps=(state)=>{
  return {
   loadingState: state.searchResults.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    onSearchMovie: (movie)=> dispatch(actions.searchMovie(movie))
  }
}

export default connect(mapStatetToProps,mapDispatchToProps)(SearchMovies)

