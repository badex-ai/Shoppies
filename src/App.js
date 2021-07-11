import classes from './App.css';

 import  InitialPage  from './containers/initialPage';
 import MainContent from './containers/mainContent'
 import {useState,useEffect} from 'react';
//  import {ErrorBoundary} from 'react-error-boundary'
import ErrorBoundary from './containers/errorBoundary'
import Alert from './components/alert'
import {connect } from 'react-redux'
 






function App(props) {
  

 const [initialLoad, setInitialLoad] = useState(true)
 const [showAlert, setShowAlert] = useState(false)


  useEffect(() => {
    if(props.error){
    setShowAlert(true)

    }
    
  }, [props.error])

 window.onload = function() {
   

  setTimeout(() => {
    setInitialLoad(false)
  }, 4000);
  
};

  const closeAlertHandler=()=>{
    setShowAlert(false)
  }



let alert = showAlert ? <Alert onClick={()=>closeAlertHandler()}/> : null


  
  return (
    <div>
      { initialLoad ?
        <div className={classes.cont}>
       
          <InitialPage/>
     
        </div>
          
          : 
          
          
          <div>
           {alert}
            <ErrorBoundary>
            
            <MainContent/>
                    </ErrorBoundary>
          </div>
      }
    </div>

    
    
    );
}


const mapStateToProps = (state) => ({
  
 
  error: state.searchResults.error

  
  
})

const mapDispatchToProps =(dispatch)=>( {
  // fetchMoreMovies: (title,page)=> dispatch(actions.fetchMoreMovies(title,page)),

  
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
// App





















