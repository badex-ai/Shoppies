import classes from './App.css';

 import  InitialPage  from './containers/initialPage';
 import MainContent from './containers/mainContent'
 import {useState} from 'react';

 






function App(props) {
  

 const [initialLoad, setInitialLoad] = useState(true)




 window.onload = function() {
   

  setTimeout(() => {
    setInitialLoad(false)
  }, 4000);
};







  
  return (
    <div>
      { initialLoad ?
        <div className={classes.cont}>
       
          <InitialPage/>
         
          
            
                
         
          
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





















