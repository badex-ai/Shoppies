// import React,{useState,useEffect,useRef} from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import * as actions from '../components/store/actions/index'
// import classes from './movieResultContainer.css'


// export const MovieResultContainer = (props) => {
    
//   let resultRef = useRef(null);
//   const [prevY, setPrevY] = useState(0)

//   const [moviesRemain, setMoviesRemain] = useState(false);

//   const [page, setPage] = useState(1);

   
//   useEffect(() => {
//     const root = document.getElementById('scrollableDiv');
//     const loading = document.getElementById('try');
//     console.log('useEffect works')
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           console.log('ReactObserver working')
//         }
//       },
//       {
//                    root: root,
//                     rootMargin: '0px',
//                    threshold: 1
//                 },
//     )
//     console.log(loading)
//     observer.observe(loading)
    
//   }, [])


//     // useEffect(() => {
//     //     // console.log(prevY);
//     //     // if props.totalMoviesNumber.
//     //     let y;
//     //     const root = document.getElementById('cover').firstChild;
//     //     const observedBar = root.lastChild;
    
//     //     if(props.searchResults){
    
//     //       const onLoadMoreMovies=()=>{
//     //         const newpage = page + 1;
//     //         setPage(newpage);
//     //         console.log(page,newpage);
//     //         if(moviesRemain){
//     //           console.log("loading more movies")
//     //         }
//     //         props.fetchMoreMovies(props.passedSearchTerm,newpage)
//     //         // props.fetchMoreMovies()
//     //       }
    
        
//     //       // const root = document.getElementById('cover').firstChild;
//     //       // console.log(root);
    
          
    
//     //       // console.log(observedBar);
          
//     //       var options = {
//     //             root: root,
//     //             rootMargin: '0px',
//     //             threshold: 1
//     //           };
    
    
//     //         let observer = new IntersectionObserver(
//     //       (entities)=>{
//     //         console.log("ingersection observer works")
//     //        y = entities[0].boundingClientRect.y;
//     //       console.log(y)
//     //       setPrevY(y)
//     //       if (prevY > y) {
//     //         console.log(y)
//     //       console.log("ask for more")
//     //       onLoadMoreMovies()
//     //       } 
//     //       }, //callback
//     //       options
          
//     //     );
        
        
    
//     //     observer.observe(observedBar);
//     //   }
//     //   //  console.log( moviesRemain,  page,  prevY, props.searchResults, searchTerm)
//     //   }, [moviesRemain, page, prevY, props, props.searchResults, props.passedSearchTerm])

    

//     return (
//         <div  id="scrollableDiv" className={classes.scrollableDiv}>
   
//       {props.children}
     
//       <div
//       ref={node=>{resultRef=node}}
//       className={classes.try}
//       id="try"
//       >
//         <span>Loading...</span>
//       </div>
//     </div>
//     )
// }

// // MovieResultContainer.propTypes = {
// //     props: PropTypes
// // }

// const mapStateToProps = (state) => ({
//   searchResults: state.searchResults.moviesResult,
//   totalMoviesNumber: state.searchResults.moviesTotal,

    
// })

// const mapDispatchToProps = (dispatch)=>( {
//     fetchMoreMovies: (title,page)=> dispatch(actions.fetchMoreMovies(title,page)),
  
    
//   })

// export default connect(mapStateToProps, mapDispatchToProps)(MovieResultContainer)
