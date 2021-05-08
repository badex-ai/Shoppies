import './App.css';
import NominatedMovies from  './containers/nominatedMovies';
import SearchResult from './containers/searchResult'
import SearchMovies from './containers/searchMovies';
import classes from './App.css'
import {connect} from 'react-redux';
import * as actions from './components/store/actions/index'
import InfiniteScroll from "react-infinite-scroll-component";


function App(props) {
  // const [moviesRemain, setMoviesRemain] = useState({
  //   hasMore: true,
  // })

  // const loading = if(props.loading){

  // }
  // if(props.searchResults){
  //   const searchResults= props.searchResults.search;
  //   console.log(searchResults)
  // }

  // const onLoadMoreMovies=()=>{
  //   if(props.searchResults.)
  //   props.fetchMoreMovies()
   

  // }

  let searchResults = props.searchResults ? props.searchResults.Search.map((mov)=>{
    // console.log(mov)
    return <SearchResult key={mov.imdbID} title={mov.Title} movieInfo={mov}></SearchResult>
      
   }): <p>pls enter title of movie</p>;

   let nominationComplete = props.nominationComplete ? <p >nomination complete</p>: null
   
   let nominatedMovieslist = props.nominatedMovies.length>0 ? props.nominatedMovies.map((el)=>{
     return <NominatedMovies key={el.imdbID} movie={el}></NominatedMovies>
   }): <p>nominate a movie</p>;

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.topNav}>
          <div className={classes.logo}>Logo</div>
          <div className={classes.links}>
            <div>Home</div>
            <div>About</div>
            <div className={classes.profileImg}><img width="45px" height="45px" alt="i"/></div>
          </div>

        </div>
        <div className={classes.jumbo}>
        <div className={classes.caption}>
        <div>The Shoppies Awards</div>
        <div>Search for your top 5 favourite movies and nominate them for the shoppies Awards</div>
        <SearchMovies className={classes.search}></SearchMovies>

        </div>
        </div>
        
      </header>
      <div className={classes.success}>
      {nominationComplete}
      </div>
      
      <div className={classes.container}>
      <main className={classes.body}>
        <div className={classes.focus}>
        <div >
          <div>Result for Search</div>
          <div className={classes.searchResults}>
          {searchResults}
          </div>
          
        </div>
        {/* <div>
        <InfiniteScroll
            dataLength={props.searchResults.}
            next={onLoadMoreMovies}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {searchResults}
          </InfiniteScroll>
        </div> */}
       
       <div>
         <div className={classes.topStuff}>
           <div>Your Nominations</div>
           <div>
             Share
           </div>
         </div>
         <div className={classes.nominatedMovies}>
         {nominatedMovieslist}
         </div>
        
      </div>
        </div>
       

      </main>

      
       
      
      </div>
      
    </div>
    );
}


const mapStateToProps = (state) => ({
  loading: state.searchResults.loading,
  searchResults: state.searchResults.moviesResult,
  nominatedMovies: state.nominatedMovies.nominatedMovies,
  nominationComplete: state.nominatedMovies.nominationComplete
  
  
})

const mapDispatchToProps =(dispatch)=>( {
  fetchMoreMovies: (title,page)=> dispatch(actions.fetchMoreMovies(title,page)),

  
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
