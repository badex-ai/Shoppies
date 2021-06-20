import classes from './App.css';

 import  InitialPage  from './containers/initialPage';
 import MainContent from './containers/mainContent'
 import {useState,useEffect} from 'react';
//  import logoBig form './assets/SVG/Logo_big'
//  import animationData from './assets/data.json';
 






function App(props) {
  

 const [initialLoad, setInitialLoad] = useState(true)


console.log(document.readyState)



// const loader = document.getElementById("loader");

useEffect(() => {
  window.onload = function() {
    // document.getElementById("loader").style.transform=`scaleX(.99)`

  setTimeout(() => {
    setInitialLoad(false)
  }, 4000);
};
//   let value;
//    switch (document.readyState) {
//      case "interactive":
//           value = 0.75
//        break;
//      case "complete":
//        value = 0.99
//        break;
//     default: value = 0.2
//        break;
    
//    }

   
//    console.log(document.readyState)
  
//   document.addEventListener('readystatechange', () => {
//     document.getElementById("loader").style.transform=`scaleX(${value})`;
// });

  
}, [])


// style={{transform: "scaleX(1)",transformOrigin: "left center"}}
  
  return (
    <div>
      { initialLoad ?
        <div className={classes.cont}>
       
          <InitialPage/>
          {/* <div className={classes.rightLayer}></div>  */}
          
            
                
          {/* <div className={classes.rightLayer}></div>   */}
          
        </div>
          
          : 

        <MainContent/>
      }
    </div>

    
    
    );
}


// const mapStateToProps = (state) => ({
//   searchResults: state.searchResults.moviesResult,
//   nominatedMovies: state.nominatedMovies.nominatedMovies,
//   nominationComplete: state.nominatedMovies.nominationComplete,
//   totalMoviesNumber: state.searchResults.moviesTotal,
//   noResult: state.searchResults.noResult
  
  
// })

// const mapDispatchToProps =(dispatch)=>( {
//   fetchMoreMovies: (title,page)=> dispatch(actions.fetchMoreMovies(title,page)),

  
// })

export default App
// connect(mapStateToProps,mapDispatchToProps)(App);





















