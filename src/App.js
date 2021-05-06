import './App.css';
import NominatedMovies from  './containers/nominatedMovies';
import SearchResult from './containers/searchResult'
import SearchMovies from './containers/searchMovies';
import {connect} from 'react-redux';

function App(props) {

  // const loading = if(props.loading){

  // }
  // if(props.searchResults){
  //   const searchResults= props.searchResults.search;
  //   console.log(searchResults)
  // }

  let searchResults = props.searchResults ? props.searchResults.Search.map((mov)=>{
    console.log(mov)
    return <SearchResult key={mov.imdbID} title={mov.title}></SearchResult>
      
   }): <p>pls enter title of movie</p>
   

  return (
    <div>
      <header></header>
      <div>
      <main>
        <SearchMovies></SearchMovies>
        <div>
          {searchResults}
        </div>
      </main>
      <NominatedMovies></NominatedMovies>
      </div>
      
    </div>
    );
}


const mapStateToProps = (state) => ({
  loading: state.searchResults.loading,
  searchResults: state.searchResults.moviesResult,
  
  
})

const mapDispatchToProps =(dispatch)=>( {
  
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
