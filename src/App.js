import classes from './App.css';

 import  InitialPage  from './containers/initialPage';
 import MainContent from './containers/mainContent'
 import {useState} from 'react';
//  import logoBig form './assets/SVG/Logo_big'
//  import animationData from './assets/data.json';
 






function App(props) {
  

 const [initialLoad, setInitialLoad] = useState(true)



window.onload= function() {
  setTimeout(() => {
    setInitialLoad(false)
  }, 3500);
};


 
  
  return (
    <div>
      {initialLoad ?
        <div className={classes.cont}>
       
          <InitialPage/>
          <div className={classes.rightLayer}></div>  
          
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





















