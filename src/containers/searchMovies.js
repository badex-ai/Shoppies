import React, {useState,useRef} from 'react';
// import PropTypes from 'prop-types';
import classes from './searchMovies.css'
import {connect} from 'react-redux';
import * as actions from '../components/store/actions/index'

function SearchMovies(props) {
  const input = useRef(null)
  const [title, setTitle] = useState({value:''});

  const inputChangeHandler=(e)=>{
    setTitle({value: e.target.value})
    // props.onChange(title)
    // console.log(title)

  }

  const move=(event)=>{
    props.focus(event)

   
  }

  const onSearchHandler=(e)=>{
    e.preventDefault()
    // console.log(title.value);
    // console.log(title.value.trim)
  //  const searchterm = title.value.split(' ').join('+').trim()
  const searchterm = title.value.trim()
   console.log(searchterm) 
    if(searchterm !== ''){
      props.onSubmit(title.value)
    props.onSearchMovie(title.value);
  
     setTitle({value:''});
    }
    
     input.current.blur()
    //  e.target.reset()
  }
  

    return (
        
          <form className={classes.form} onSubmit={(e)=>onSearchHandler(e)}>
          <input autoComplete="off" ref={input} onFocus={move} className={classes.input} type="text" name="title" onChange={(e)=>{inputChangeHandler(e)}} value={title.value} placeholder="Enter movie title"></input>
          {/* <button type="submit" > search</button> */}
        </form>
    )
}

// SearchMovies.propTypes = {

// }

const mapStateToProps=(state)=>{
  return {
   loadingState: state.searchResults.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    onSearchMovie: (movie)=> dispatch(actions.searchMovie(movie))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchMovies)

