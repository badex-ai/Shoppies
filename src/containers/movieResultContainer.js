import React,{useState,useEffect} from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../components/store/actions/index'
import { useInView } from "react-intersection-observer";
import classes from './movieResultContainer.css'


export const MovieResultContainer = (props) => {
 
  const [isFinished, setIsFinished] = useState(false)

  

  const [page, setPage] = useState(1);

  const [ref, inView] = useInView({
    threshold: 0.9,
  })

   
  



    useEffect(() => {
      const onLoadMoreMovies=()=>{
                const newpage = page + 1;
                setPage(newpage);
                props.fetchMoreMovies(props.passedSearchTerm,newpage)
                
      }
      if(props.totalMoviesNumber > props.searchResults.length ){
        if (inView) {
          onLoadMoreMovies()
        }
      }else{
        setIsFinished(true)
      }
      
    }, [inView, page, props]);
    
    let load = isFinished ? <div className={classes.finished}></div> : <div className={classes.svg}>
    <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 80 80"
          xmlSpace="preserve"
        >
          <circle cx="6" cy="50" r="6" fill="#4c8077">
            <animate
              attributeName="opacity"
              begin="0.1"
              dur="1s"
              repeatCount="indefinite"
              values="0;1;0"
            ></animate>
          </circle>
          <circle cx="26" cy="50" r="6" fill="#4c8077">
            <animate
              attributeName="opacity"
              begin="0.2"
              dur="1s"
              repeatCount="indefinite"
              values="0;1;0"
            ></animate>
          </circle>
          <circle cx="46" cy="50" r="6" fill="#4c8077">
            <animate
              attributeName="opacity"
              begin="0.3"
              dur="1s"
              repeatCount="indefinite"
              values="0;1;0"
            ></animate>
          </circle>
        </svg>
  </div>

    return (
        <ul inView={inView} 
        // id="scrollableDiv"
         className={classes.scrollableDiv}>
   
          {props.children}
        
          <div
          ref={ref}
          // ref={node=>{resultRef=node}}
          className={classes.try}
          id="try"
          >
            {load} 
          </div>
        </ul>
    )
}

// MovieResultContainer.propTypes = {
//     props: PropTypes
// }

const mapStateToProps = (state) => ({
  searchResults: state.searchResults.moviesResult,
  totalMoviesNumber: state.searchResults.moviesTotal,

    
})

const mapDispatchToProps = (dispatch)=>( {
    fetchMoreMovies: (title,page)=> dispatch(actions.fetchMoreMovies(title,page)),
  
    
  })

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(MovieResultContainer))
