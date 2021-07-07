import classes from './App.css';

 import  InitialPage  from './containers/initialPage';
 import MainContent from './containers/mainContent'
 import {useState} from 'react';
 import {ErrorBoundary} from 'react-error-boundary'

 






function App(props) {
  

 const [initialLoad, setInitialLoad] = useState(true)




 window.onload = function() {
   

  setTimeout(() => {
    setInitialLoad(false)
  }, 4000);
};

function ErrorFallback({error}) {
  return (
    <div className={classes.alert} role="alert">
          <p>Something went wrong !</p>
          <div className={classes.cancel}>
          <svg id="Remove_Icon" data-name="Remove Icon" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 32 32">
            {/* <rect id="Rectangle_44" data-name="Rectangle 44" width="20" height="20" fill="none"/> */}
            <g id="Group_50" data-name="Group 50">
                <line id="Line_2" data-name="Line 2" x1="12" y2="12" transform="translate(10 10)" fill="none" stroke="#fff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
                <line id="Line_3" data-name="Line 3" x1="12" y1="12" transform="translate(10 10)" fill="none" stroke="#fff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
            </g>
            </svg>
          </div>

    </div>
  )
}







  
  return (
    <div>
      { initialLoad ?
        <div className={classes.cont}>
       
          <InitialPage/>
     
        </div>
          
          : 

          <ErrorBoundary  FallbackComponent={ErrorFallback}>
           
          <MainContent/>
        </ErrorBoundary>
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





















