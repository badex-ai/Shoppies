import './App.css';
import completeImg from './animoj.png'
import reflickGlow from './assets/data.json'
import NominatedMovies from  './containers/nominatedMovies';
import SearchResult from './containers/searchResult'
import SearchMovies from './containers/searchMovies';
import Loader from './components/shared/loader';
import classes from './App.css';
 import {useState,useEffect} from 'react';
 import Lottie from 'react-lottie';
//  import logoBig form './assets/SVG/Logo_big'
//  import animationData from './assets/data.json';
 
//  import MovieResultContainer from './containers/movieResultContainer';

import {connect} from 'react-redux';
import * as actions from './components/store/actions/index'



function App(props) {
  
  // let resultRef = useRef();
  // console.log(loadingRef);
 const [initialLoad, setInitialLoad] = useState(true)



window.onload= function() {
  setTimeout(() => {
    setInitialLoad(false)
  }, 4000);

  
  
  
};
  const [prevY, setPrevY] = useState(0)
  const [socials, setSocials] = useState({openSocials: false});
   const [loading, setLoading] = useState({value:false});
   const [notif, setNotif] = useState(false);
   const [searchTerm, setSearchTerm] = useState('Movie Title')
  //  const [moviesRemain, setMoviesRemain] = useState(true);
   const [page, setPage] = useState(1);
    const [show, setShow] = useState(false);
    // const [showNoResult, setShowNoResult] = useState(false);




    // useEffect(() => {
    //   // console.log("Testing the loading")
    // }, [])
 
  useEffect(() => {
    if(!initialLoad){
      let y;
      const root = document.getElementById('cover').firstChild;
      const observedBar = root.lastChild;
  
      if(props.searchResults){
  
        const onLoadMoreMovies=()=>{
          const newpage = page + 1;
          setPage(newpage);
          // console.log(page,newpage);
          props.fetchMoreMovies(searchTerm,newpage)
          
        }
        var options = {
              root: root,
              rootMargin: '0px',
              threshold: 1
            };
  
          let observer = new IntersectionObserver(
        (entities)=>{
          // console.log("intersection observer works")
         y = entities[0].boundingClientRect.y;
        // console.log(y)
        setPrevY(y)
        if (prevY > y) {
        console.log("ask for more")
        onLoadMoreMovies()
        } 
        }, //callback
        options
      );
      observer.observe(observedBar);
    }

    }
    
  }, [initialLoad, page, prevY, props, props.searchResults, searchTerm])



 

  useEffect(() => {
    // console.log(props.searchResults, props.totalMoviesNumber,props.noResult)

     if(props.noResult){
      setLoading({value: false})
      // setShowNoResult(true)
      
    }
    if(props.searchResults != null){

      setLoading({value: false})
      if(props.totalMoviesNumber === props.searchResults.length){
        // console.log(props.totalMoviesNumber === (props.searchResults.length), "yes they are equal")
        // setMoviesRemain(true)
        
      }
      
    }
    
    
  },[props.searchResults, props.totalMoviesNumber, props.noResult])

  

  

 

useEffect(() => {
  // console.log(props.nominationComplete);
  setNotif(props.nominationComplete)
  
  
  
}, [props.nominationComplete])

   
    

    
    

  // if(props.searchResults.totalResults > props.searchResults.moviesResult){
  //   setMoviesRemain(true);
  // }

  // const handleObserver = (entities, observer)=>{
  //   const y = entities[0].boundingClientRect.y;
  //   if (prevY > y) {
  //     onLoadMoreMovies()
  //   }
  
  //   setPrevY(y)
  // }
  
 

  // console.log(window.screen.width)

  // const preloadImages = images => {
  //   return new Promise(resolve => {
  //     if (!images.length) {
  //       return resolve('loaded');
  //     }
  
  //     let loadedImages = 0;
  //     const onImageRequestComplete = () => {
  //       loadedImages++;
  
  //       if (loadedImages === images.length) {
  //         resolve('loaded');
  //       }
  //     };
  
  //     images.forEach(image => {
  //       const img = new Image();
  //       img.onload = onImageRequestComplete;
  //       img.onerror = onImageRequestComplete;
  //       img.src = image;
  //     });
  //   });
  // };

 
  window.onscroll = function() {
    if(window.screen.width <= 480){
      scrollmobileFunction();
      // console.log(document.querySelector("._1KURnOvqTfYNdcdxee_CV6"))
      
      // console.log(document.getElementsByClassName("DFJnxivdc6OX74yZpmkrk")[0].firstChild)
      // 
      
      
      
      
     
    }else{
      scrollDeskFunction()
    }
  }

  
  function scrollmobileFunction() {
  if (document.body.scrollTop > 290 || document.documentElement.scrollTop > 290) {
    document.querySelector("._1KURnOvqTfYNdcdxee_CV6").style.top = "0rem";
  } else {
    document.querySelector("._1KURnOvqTfYNdcdxee_CV6").style.top = "-10rem";
  }
}


  function scrollDeskFunction() {
  if (document.body.scrollTop > 290 || document.documentElement.scrollTop > 290) {
    document.querySelector("._1KURnOvqTfYNdcdxee_CV6").style.top = "0";
  } else {
    document.querySelector("._1KURnOvqTfYNdcdxee_CV6").style.top = "-10rem";
  }
}

const ondecoy=()=>{
  return
}
const onFocusInput=()=>{
  // console.log("it has been focused on")
  // console.log(window.innerHeight)
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // console.log('ios')
        // document.querySelector("#iq").style.paddingBottom="10rem"
        setTimeout(() => {
          document.querySelector("._1KURnOvqTfYNdcdxee_CV6").style.top = "-0rem";
          // document.querySelector("._1KURnOvqTfYNdcdxee_CV6").style.position = "fixed";

        }, 300);
        
        // return "iOS";
       
      }else return
}
const onCloseNotif=()=>{
  setNotif(false)
}
const onShowNominated=()=>{
  // console.log(show)
 document.getElementById("_1VD8IVh3pdJAVVq2RCsWsS").style.display="block";
 document.getElementById("_1VD8IVh3pdJAVVq2RCsWsS").style.opacity= "1"

 document.getElementById("_1VD8IVh3pdJAVVq2RCsWsS").style.transition="opacity .3s ease";

  setShow(true)
}
// ANIMATION**********************///////////

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: reflickGlow,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


//*********************************** */

const onCloseNominated=()=>{
  // console.log(show)
 document.getElementById("_1VD8IVh3pdJAVVq2RCsWsS").style.display= "none"
 document.getElementById("_1VD8IVh3pdJAVVq2RCsWsS").style.opacity= "0"

 document.getElementById("_1VD8IVh3pdJAVVq2RCsWsS").style.transition="opacity .3s ease";

  setShow(false)
}
const onHandleLoading=(event)=>{
  setLoading({value:true})
  // setShowNoResult(false);
  // console.log("i just set show no result to false")
  
  
   setSearchTerm(event);
}

  const onShareHandler=()=>{
     setSocials({openSocials:!socials.openSocials})
  }

  

  const onCloseSocials=()=>{
    setSocials({openSocials:false})
  }
  
  
  let searchResults
  
  const completeOverlay = notif ? <div className={classes.completeOverlay}>
    <div className={classes.complete}>
    <div onClick={onCloseNotif} className={classes.cancelNotif}>

    <svg id="Remove_Icon" data-name="Remove Icon" xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 32 32">
            <rect id="Rectangle_44" data-name="Rectangle 44" width="32" height="32" fill="none"/>
            <g id="Group_50" data-name="Group 50">
                <line id="Line_2" data-name="Line 2" x1="12" y2="12" transform="translate(10 10)" fill="none" stroke="#004c3f" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
                <line id="Line_3" data-name="Line 3" x1="12" y1="12" transform="translate(10 10)" fill="none" stroke="#004c3f" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
            </g>
            </svg>
</div>
      <div className={classes.animoj}>
      <img style={{width: '15rem'}}src={completeImg} alt="complete" />
      </div>
      <p>Thank you for nominating</p>
    </div>
    
   
    
  </div> : null;


   if(props.searchResults ){

   const results = props.searchResults.map((mov)=>{
      return <SearchResult key={mov.imdbID} title={mov.Title} movieInfo={mov}></SearchResult>
        
     })
    // setLoading({value: false});
    searchResults =
    //  <MovieResultContainer passedSearchTerm={searchTerm}>{results}</MovieResultContainer>
    <div id="scrollableDiv" className={classes.scrollableDiv}>
    
      {results}
      <div
      className={classes.try}
      // id="try"
      >
        <span>Loading...</span>
      </div>
    </div> 
      }else if(props.noResult){
    
        // setLoading({value: false});
        searchResults = <div className={classes.initial}>
      <div className={classes.initialSvg}>
      </div>
      <div className={classes.initialText}>No result found </div>
      </div>
      }
    else{searchResults =
     <div className={classes.initial}>
  <div className={classes.initialSvg}>

    <svg version="1.1" id="Capa_1" x="0px" y="0px"
       viewBox="0 0 398.963 398.963" >
    <g id="_x33_8-Award_symbol">
      <g>
        <path d="M398.611,207.091c-0.252-0.208-0.618-0.274-0.903-0.178c-0.348,0.107-0.667,0.2-0.968,0.288l-0.147,0.043
          c-0.742,0.217-1.383,0.403-2.018,0.658c-10.032,3.986-17.93,10.815-24.146,20.876c-1.535,2.486-2.724,5.07-3.671,7.647
          c1.553-8.668,1.913-12.045,2.188-21.744c0.013-0.407,0.013-0.821,0.013-1.232c0-1.122,0-2.182,0.245-3.149
          c0.294-1.146,0.885-2.289,1.457-3.395c0.161-0.313,0.322-0.626,0.455-0.901c0.046-0.054,0.195-0.145,0.253-0.154
          c2.869-0.438,5.406-1.656,7.758-3.723c2.37-2.093,4.319-4.655,5.794-7.617c5.294-10.616,7.943-22.35,7.876-34.872
          c-0.006-1.208-0.148-2.384-0.304-3.663c-0.071-0.573-0.143-1.159-0.203-1.766c-0.034-0.333-0.239-0.629-0.536-0.773
          c-0.293-0.142-0.647-0.132-0.943,0.047c-0.179,0.112-0.332,0.203-0.471,0.284c-0.269,0.16-0.474,0.285-0.668,0.425
          c-4.516,3.237-8.499,7.267-11.84,11.975c-5.452,7.695-8.623,16.396-9.477,25.968c-0.085-1.067-0.171-2.134-0.257-3.201
          l-0.03-0.387c-0.335-4.183-0.681-8.509-0.963-12.763c-0.071-1.077-0.278-2.125-0.478-3.139c-0.386-1.949-0.751-3.79-0.167-5.719
          c0.133-0.436,0.245-0.875,0.357-1.313c0.276-1.085,1.609-2.756,3.656-4.583l0.077-0.069c0.755-0.64,4.633-4.188,6.833-11.206
          c2.233-7.13,2.064-14.58,1.941-20.02l-0.003-0.145c-0.164-7.478-0.972-13.113-2.62-18.274c-0.213-0.66-0.466-1.311-0.734-1.995
          c-0.139-0.356-0.281-0.724-0.427-1.109c-0.12-0.326-0.408-0.563-0.745-0.619l-0.165-0.015c-0.292,0-0.565,0.131-0.75,0.357
          l-1.601,1.951c-7.676,9.362-11.447,20.342-11.211,32.636c0.041,2.165,0.203,4.386,0.49,6.679
          c-1.951-6.733-4.239-13.287-6.841-19.592c-0.054-0.138-0.089-0.309-0.093-0.454l-0.018-0.862
          c-0.027-1.244-0.055-2.531-0.002-3.797c0.008-0.21,0.144-0.587,0.427-0.958c0.402-0.531,0.848-1.05,1.31-1.59
          c0.787-0.916,1.6-1.862,2.244-2.942c2.074-3.474,3.048-7.578,3.064-12.917c0.028-6.285-0.941-12.899-3.053-20.816
          c-1.154-4.319-2.896-9.93-6.14-15.017c-0.22-0.342-0.466-0.664-0.728-1.005c-0.118-0.151-0.242-0.312-0.368-0.485
          c-0.184-0.247-0.438-0.391-0.848-0.391c-0.327,0.024-0.619,0.21-0.782,0.499c-4.072,7.349-6.1,15.2-6.196,24.002
          c-0.082,7.339,1.064,13.654,2.501,18.645c-3.657-6.681-7.721-13.136-12.126-19.259l-0.101-0.139
          c-0.1-0.133-0.142-0.198-0.135-0.152c-0.277-1.981-0.469-3.566-0.602-4.946c0.003-0.021,0.029-0.137,0.235-0.481
          c0.291-0.496,0.61-0.982,0.949-1.496c0.68-1.034,1.382-2.104,1.832-3.302c1.358-3.616,1.663-7.717,0.93-12.533
          c-1.609-10.659-6.308-20.257-14.362-29.344c-0.829-0.933-1.745-1.758-2.714-2.63l-0.268-0.243
          c-0.379-0.343-0.768-0.694-1.161-1.065c-0.25-0.238-0.608-0.327-0.955-0.225c-0.328,0.104-0.581,0.376-0.659,0.714l-0.176,0.772
          c-0.12,0.512-0.213,0.916-0.282,1.322c-1.084,6.47-1.005,13.4,0.243,21.188c1.238,7.724,3.705,14.386,7.49,20.173
          c-5.676-6.688-11.197-12.304-16.967-17.281c-0.026-0.034-0.064-0.137-0.067-0.163c0.451-3.885-0.507-7.545-2.931-11.189
          c-3.183-4.789-7.606-8.439-13.146-10.847c-3.315-1.438-6.75-2.711-10.113-3.958c-1.611-0.598-3.222-1.194-4.881-1.833
          c-1.667-0.663-2.38-0.781-2.767-0.423c-0.498,0.464-0.378,0.86-0.161,1.58l0.07,0.235c2.033,6.848,4.731,12.264,8.25,16.557
          c6.46,7.889,14.015,11.897,23.085,12.251c0.318,0.019,0.57,0.107,0.673,0.187c1.277,0.956,2.217,1.721,3.048,2.479
          c2.628,2.402,5.216,4.961,7.748,7.656c-3.766-2.34-8.369-3.396-13.553-3.134c-2.837,0.143-5.653,0.559-8.376,0.961l-0.104,0.016
          c-0.805,0.118-1.606,0.235-2.405,0.348c-1.75,0.237-3.514,0.547-5.072,0.819c-0.631,0.113-2.138,0.456-2.485,1.187
          c-0.12,0.25-0.11,0.524,0.026,0.773c0.12,0.217,0.252,0.421,0.396,0.607c4.497,5.835,9.627,9.678,15.683,11.747
          c7.384,2.536,14.166,2.327,20.26-0.656c0.932-0.513,2.056-0.773,3.34-0.773c0.969,0,1.696,0.153,1.937,0.208
          c0.361,0.06,0.851,0.262,0.951,0.392c3.79,4.983,7.387,10.305,10.746,15.896c-2.838-2.76-6.539-4.621-11.581-5.833
          c-4.419-1.053-8.937-1.279-13.305-1.499l-1.463-0.074c-1.37-0.07-2.74-0.157-4.151-0.246l-2.366-0.146
          c-0.306,0-0.597,0.148-0.775,0.394c-0.197,0.265-0.244,0.609-0.128,0.918c0.095,0.258,0.268,0.713,0.357,0.865
          c4.607,7.706,10.017,13.036,16.537,16.296c6.374,3.184,12.133,4.026,17.942,2.637c0.672-0.162,1.451-0.248,2.256-0.248
          c2.471,0,4.194,0.754,4.556,1.452c3.196,6.593,6.048,13.444,8.508,20.432c-2.58-3.557-6.188-6.446-10.756-8.607
          c-4.538-2.142-9.263-4.1-13.912-6.027c-1.998-0.826-4.004-1.655-6.001-2.503c-0.297-0.13-0.648-0.103-0.925,0.08
          c-0.272,0.181-0.434,0.483-0.434,0.808c0,0.624,6.63,19.025,16.259,26.276c3.928,2.958,8.766,6.001,14.867,6.144
          c1.826,0.037,3.714,0.295,5.14,1.916c0.218,0.258,0.507,0.459,0.822,0.566c0.487,0.16,0.621,0.458,0.861,1.474
          c1.976,8.296,3.415,16.847,4.301,25.53c-0.268-0.881-0.579-1.771-0.936-2.672c-2.155-5.465-5.782-10.247-11.414-15.05
          c-2.903-2.486-5.943-4.893-8.883-7.222l-0.14-0.11c-1.339-1.061-2.675-2.118-4.007-3.188c-0.275-0.221-0.543-0.449-0.854-0.715
          l-0.831-0.712c-0.291-0.246-0.724-0.297-1.064-0.127c-0.349,0.177-0.558,0.543-0.531,0.934c0.041,0.587,0.074,1.142,0.105,1.675
          l0.016,0.249c0.066,1.097,0.128,2.132,0.239,3.154c1.042,9.951,4.001,18.259,9.046,25.398c3.123,4.413,7.603,9.807,14.589,12.358
          c1.7,0.624,2.933,1.569,4.254,3.265c1.246,1.588,1.478,3.039,1.45,4.865c-0.119,7.649-0.664,15.237-1.625,22.668
          c-0.225-2.068-0.701-4.197-1.432-6.409c-1.513-4.58-3.871-9.033-7.21-13.613c-2.882-3.966-5.881-7.946-8.781-11.797l-0.193-0.257
          c-1.15-1.525-2.299-3.052-3.418-4.546c-0.21-0.307-0.513-0.417-0.688-0.478c-0.248-0.121-0.544-0.133-0.807-0.021
          c-0.258,0.11-0.456,0.327-0.543,0.593l-0.034,0.104c-0.048,0.14-0.086,0.264-0.106,0.388c-2,11.926-0.773,22.611,3.75,32.669
          c2.209,4.918,5.172,10.486,10.396,14.492c2.385,1.829,4.268,4.395,5.302,7.224c0.219,0.609,0.211,0.873,0.186,0.975
          c-2.211,9.158-5.099,17.991-8.61,26.351c0.904-4.406,0.842-9.034-0.19-13.829c-1.465-6.796-3.983-13.382-6.229-19.022
          l-0.673-1.689c-1.053-2.643-2.113-5.307-3.208-8.068c-0.139-0.353-0.474-0.594-0.921-0.616c-0.352,0-0.676,0.201-0.844,0.527
          l-0.353,0.664c-0.155,0.291-0.3,0.562-0.424,0.842c-4.518,10.194-6.044,20.644-4.533,31.06c1.08,7.448,2.91,12.781,5.934,17.293
          c1.565,2.332,3.052,4.93,3.322,8.125c0.064,0.756,0.034,1.277-0.303,1.87c-3.814,6.679-8.09,12.982-12.773,18.838
          c0.018-0.032,0.035-0.064,0.053-0.096c3.369-6.157,3.471-12.814,3.127-18.515c-0.297-4.887-0.857-9.767-1.396-14.485l-0.031-0.273
          c-0.217-1.89-0.433-3.779-0.63-5.672c-0.114-1.073-0.241-2.146-0.372-3.235l-0.173-1.474c-0.038-0.326-0.237-0.608-0.523-0.75
          c-0.532-0.278-1.393,0.151-2.323,1.251c-6.391,7.559-10.357,16.101-11.789,25.39c-1.485,9.631-0.68,17.873,2.464,25.197
          c0.084,0.195,0.082,0.593,0.081,0.726l-0.169,4.214c-0.025,0.303-0.185,0.645-0.317,0.772
          c-6.382,6.146-13.408,11.489-20.948,15.936c3.569-3.226,6.135-7.435,7.798-12.769c1.843-5.912,2.789-12.065,3.706-18.031
          l0.08-0.531c0.325-2.096,0.664-4.188,1.01-6.326l0.391-2.417c0.056-0.352-0.083-0.704-0.356-0.915
          c-0.271-0.216-0.663-0.268-0.975-0.134l-0.341,0.141c-0.364,0.149-0.681,0.282-0.98,0.435
          c-14.254,7.119-23.637,23.723-22.311,39.479c0.208,2.468-0.018,4.786-0.692,7.082c-0.063,0.209-0.265,0.436-0.347,0.474
          c-6.77,2.855-13.207,4.938-19.684,6.368c-0.333,0.077-0.597,0.315-0.705,0.636c-0.109,0.323-0.043,0.674,0.179,0.938
          c0.704,0.834,1.317,1.731,1.821,2.67c0.207,0.384,0.7,0.581,1.069,0.485c5.277-1.204,10.416-2.763,15.279-4.637
          c0.393-0.158,0.693-0.233,0.974-0.187c1.082,0.144,2.225,0.366,3.494,0.681c0.262,0.064,0.479,0.185,0.483,0.174
          c2.772,5.526,7.536,9.046,14.569,10.759c1.53,0.367,3.108,0.638,4.69,0.804c1.656,0.175,3.503,0.264,5.488,0.264
          c2.75,0,4.711-0.17,4.735-0.172c6.096-0.682,11.302-2.054,15.913-4.195c1.892-0.877,4.048-2.058,5.705-4.167
          c0.317-0.404,0.264-0.987-0.121-1.326c-4.684-4.133-9.453-7.136-14.582-9.18c-7.599-3.02-14.521-3.838-21.306-2.533
          c-1.014,0.197-2.004,0.445-2.966,0.73c6.347-3.794,12.424-8.253,18.163-13.333c0.11-0.1,0.291-0.188,0.432-0.213
          c0.939-0.156,2.186-0.348,3.462-0.44c0.118,0,0.268,0.057,0.285,0.063c3.458,3.87,7.913,5.751,13.62,5.751
          c0.291,0,0.583-0.006,0.874-0.016c6.205-0.2,12.443-1.905,18.544-5.07c4.434-2.313,9.056-5.006,12.804-9.022
          c0.831-0.893,1.573-1.903,2.228-2.794l0.064-0.087c0.29-0.393,0.583-0.789,0.884-1.18c0.164-0.211,0.233-0.483,0.19-0.757
          c-0.046-0.264-0.199-0.499-0.46-0.669c-0.066-0.036-1.653-0.887-3.102-1.448c-9.702-3.749-19.497-4.133-28.841-1.122
          c-3.059,0.983-5.938,2.459-8.741,4.499c5.184-6.026,9.984-12.632,14.342-19.74c0.047-0.075,0.171-0.278,0.211-0.315
          c0.381-0.243,0.771-0.473,1.16-0.7c0.697-0.409,1.419-0.832,2.097-1.336c0.572-0.427,0.733-0.438,1.311-0.066
          c0.818,0.531,1.769,0.807,2.598,1.024c4.85,1.242,9.739,0.623,15.147-1.916c4.94-2.316,8.738-5.977,12.108-9.587
          c4.902-5.266,8.105-10.017,10.081-14.953c0.415-1.036,0.711-2.107,1.019-3.227c0.127-0.47,0.257-0.94,0.395-1.402
          c0.151-0.496-0.113-1.021-0.603-1.194l-0.406-0.031c-1.999,0-19.831,0.293-30.261,10.413c-2.269,2.202-4.303,4.542-6.16,7.104
          c4.126-8.738,7.625-17.947,10.445-27.506l0.041-0.14c0.034-0.117,0.085-0.294,0.119-0.342l2.728-3.746
          c0.102-0.15,0.114-0.15,0.274-0.15c0.071,0,0.149,0.005,0.238,0.01l0.583,0.035c2.03,0.126,3.225,0.108,4.208-0.046
          c3.884-0.613,7.39-2.569,10.717-5.981c7.781-7.98,13.137-17.936,16.373-30.434c0.347-1.339,0.444-2.691,0.548-4.125
          c0.046-0.65,0.097-1.32,0.171-2.012C398.991,207.615,398.861,207.298,398.611,207.091z"/>
        <path d="M134.608,352.396c-6.471-1.429-12.907-3.512-19.679-6.367c-0.081-0.038-0.282-0.265-0.345-0.469
          c-0.675-2.301-0.901-4.619-0.693-7.087c1.326-15.757-8.057-32.36-22.308-39.478c-0.303-0.154-0.619-0.287-0.983-0.436l-0.338-0.14
          c-0.321-0.137-0.712-0.08-0.971,0.128c-0.28,0.216-0.419,0.568-0.362,0.921l0.39,2.416c0.346,2.138,0.685,4.23,1.01,6.324
          l0.082,0.548c0.915,5.951,1.861,12.105,3.704,18.017c1.663,5.334,4.229,9.543,7.798,12.768
          c-7.54-4.446-14.566-9.789-20.947-15.934c-0.134-0.129-0.293-0.471-0.316-0.753l-0.171-4.217c-0.001-0.15-0.003-0.548,0.082-0.745
          c3.143-7.322,3.948-15.564,2.463-25.195c-1.432-9.289-5.398-17.831-11.789-25.39c-0.748-0.885-1.408-1.333-1.962-1.333
          c-0.135,0-0.257,0.027-0.353,0.077c-0.294,0.146-0.493,0.429-0.532,0.756l-0.171,1.471c-0.132,1.092-0.259,2.164-0.373,3.238
          c-0.197,1.892-0.413,3.781-0.63,5.671l-0.031,0.273c-0.54,4.719-1.1,9.599-1.396,14.485c-0.344,5.7-0.242,12.357,3.127,18.515
          c0.018,0.031,0.034,0.064,0.052,0.095c-4.683-5.856-8.958-12.158-12.772-18.836c-0.337-0.594-0.366-1.115-0.303-1.871
          c0.271-3.197,1.757-5.795,3.322-8.125c3.023-4.512,4.853-9.845,5.934-17.293c1.511-10.416-0.015-20.865-4.533-31.059
          c-0.124-0.281-0.269-0.552-0.424-0.843l-0.353-0.666c-0.169-0.325-0.53-0.539-0.911-0.522c-0.38,0.02-0.715,0.261-0.853,0.611
          c-1.096,2.764-2.156,5.427-3.209,8.07l-0.673,1.689c-2.246,5.641-4.765,12.227-6.229,19.022c-1.032,4.795-1.095,9.423-0.19,13.829
          c-3.512-8.359-6.399-17.192-8.61-26.351c-0.025-0.102-0.033-0.366,0.186-0.975c1.034-2.83,2.917-5.396,5.303-7.225
          c5.223-4.006,8.186-9.574,10.395-14.492c4.523-10.058,5.75-20.743,3.75-32.668c-0.021-0.125-0.059-0.249-0.104-0.384l-0.036-0.108
          c-0.087-0.267-0.285-0.483-0.547-0.596c-0.256-0.107-0.578-0.087-0.777,0.011c-0.2,0.073-0.503,0.184-0.7,0.473
          c-1.132,1.512-2.281,3.038-3.431,4.563l-0.193,0.257c-2.9,3.851-5.899,7.831-8.781,11.796c-3.339,4.581-5.697,9.034-7.21,13.614
          c-0.73,2.212-1.207,4.341-1.432,6.409c-0.961-7.431-1.506-15.018-1.625-22.668c-0.028-1.826,0.204-3.277,1.451-4.866
          c1.32-1.694,2.553-2.64,4.253-3.264c6.985-2.552,11.466-7.945,14.589-12.358c5.045-7.139,8.004-15.446,9.046-25.396
          c0.111-1.024,0.174-2.06,0.239-3.156l0.016-0.249c0.031-0.533,0.064-1.088,0.106-1.676c0.026-0.39-0.183-0.756-0.532-0.933
          c-0.338-0.17-0.771-0.12-1.065,0.129l-0.829,0.71c-0.312,0.266-0.579,0.494-0.856,0.716c-1.331,1.069-2.667,2.127-4.006,3.188
          l-0.14,0.11c-2.939,2.328-5.979,4.735-8.882,7.221c-5.633,4.804-9.26,9.586-11.415,15.051c-0.356,0.901-0.668,1.792-0.936,2.674
          c0.886-8.684,2.325-17.236,4.301-25.533c0.24-1.015,0.374-1.313,0.867-1.475c0.31-0.105,0.599-0.307,0.81-0.557
          c1.433-1.629,3.32-1.887,5.148-1.924c6.1-0.143,10.938-3.186,14.865-6.144c9.629-7.252,16.259-25.652,16.259-26.276
          c0-0.325-0.162-0.628-0.437-0.811c-0.271-0.179-0.637-0.204-0.913-0.081c-2.006,0.851-4.012,1.68-6.089,2.539
          c-4.57,1.895-9.295,3.853-13.833,5.994c-4.567,2.161-8.176,5.051-10.756,8.607c2.459-6.987,5.31-13.837,8.502-20.42
          c0.367-0.71,2.091-1.464,4.563-1.464c0.804,0,1.583,0.086,2.256,0.248c5.808,1.392,11.567,0.548,17.941-2.637
          c6.521-3.26,11.931-8.59,16.539-16.299c0.088-0.149,0.261-0.604,0.354-0.859c0.117-0.312,0.07-0.656-0.124-0.917
          c-0.18-0.248-0.468-0.396-0.835-0.396c-0.003,0-0.005,0-0.008,0l-2.302,0.145c-1.411,0.089-2.781,0.176-4.151,0.246l-1.463,0.074
          c-4.368,0.22-8.886,0.446-13.306,1.499c-5.041,1.212-8.742,3.073-11.58,5.833c3.359-5.591,6.956-10.911,10.745-15.894
          c0.102-0.132,0.591-0.334,0.992-0.401c0.2-0.047,0.928-0.2,1.896-0.2c1.284,0,2.408,0.261,3.361,0.785
          c6.055,2.961,12.855,3.181,20.238,0.645c6.056-2.069,11.185-5.912,15.681-11.745c0.146-0.188,0.278-0.393,0.398-0.609
          c0.137-0.249,0.146-0.523,0.026-0.773c-0.348-0.73-1.854-1.073-2.488-1.187c-1.556-0.272-3.319-0.582-5.067-0.819
          c-0.801-0.112-1.603-0.229-2.407-0.348l-0.103-0.016c-2.724-0.402-5.54-0.818-8.377-0.961c-5.184-0.265-9.787,0.793-13.554,3.135
          c2.533-2.696,5.121-5.254,7.749-7.657c0.831-0.758,1.771-1.522,3.052-2.481c0.099-0.076,0.351-0.165,0.66-0.183
          c9.079-0.355,16.634-4.363,23.094-12.251c3.519-4.294,6.217-9.71,8.25-16.558l0.07-0.235c0.217-0.72,0.337-1.116-0.162-1.58
          c-0.385-0.358-1.063-0.252-2.825,0.446c-1.6,0.615-3.21,1.212-4.863,1.825c-3.321,1.231-6.756,2.504-10.071,3.942
          c-5.54,2.408-9.964,6.058-13.147,10.847c-2.424,3.644-3.382,7.305-2.931,11.173c-0.003,0.043-0.041,0.146-0.047,0.158
          c-5.783,4.993-11.311,10.614-16.987,17.304c3.785-5.787,6.252-12.45,7.49-20.174c1.248-7.787,1.327-14.718,0.243-21.188
          c-0.069-0.405-0.162-0.81-0.281-1.317l-0.177-0.781c-0.08-0.335-0.332-0.606-0.663-0.71c-0.331-0.098-0.702-0.011-0.949,0.224
          c-0.396,0.373-0.784,0.725-1.163,1.067l-0.267,0.241c-0.97,0.874-1.886,1.699-2.715,2.632
          c-8.055,9.087-12.753,18.685-14.362,29.343c-0.733,4.817-0.429,8.918,0.93,12.534c0.45,1.198,1.152,2.268,1.851,3.33
          c0.32,0.485,0.64,0.972,0.933,1.472c0.216,0.359,0.234,0.452,0.233,0.435c-0.133,1.425-0.324,3.013-0.582,4.919
          c-0.011,0.024-0.047,0.08-0.162,0.232l-0.093,0.129c-4.405,6.123-8.469,12.578-12.126,19.259
          c1.438-4.99,2.583-11.306,2.502-18.645c-0.098-8.803-2.125-16.654-6.199-24.005c-0.161-0.286-0.453-0.472-0.862-0.5
          c-0.297,0-0.583,0.147-0.77,0.398c-0.122,0.17-0.246,0.33-0.364,0.482c-0.263,0.34-0.509,0.662-0.729,1.006
          c-3.244,5.087-4.984,10.696-6.139,15.015c-2.111,7.921-3.081,14.535-3.053,20.816c0.016,5.339,0.989,9.443,3.063,12.916
          c0.645,1.081,1.457,2.027,2.273,2.979c0.433,0.505,0.878,1.024,1.281,1.556c0.282,0.37,0.418,0.747,0.426,0.957
          c0.053,1.266,0.025,2.553-0.002,3.797l-0.019,0.86c-0.003,0.148-0.037,0.318-0.088,0.448c-2.604,6.309-4.893,12.866-6.845,19.6
          c0.287-2.293,0.449-4.513,0.49-6.679c0.236-12.294-3.535-23.273-11.211-32.636l-1.6-1.949c-0.185-0.229-0.459-0.359-0.751-0.359
          l-0.16,0.014c-0.342,0.057-0.63,0.294-0.749,0.617c-0.146,0.389-0.289,0.756-0.428,1.111c-0.268,0.686-0.521,1.336-0.735,1.997
          c-1.647,5.159-2.455,10.795-2.619,18.271l-0.003,0.146c-0.123,5.439-0.292,12.89,1.942,20.02
          c2.199,7.019,6.077,10.566,6.829,11.203l0.08,0.072c2.047,1.827,3.38,3.498,3.656,4.583c0.111,0.438,0.224,0.877,0.356,1.311
          c0.584,1.931,0.219,3.771-0.175,5.758c-0.196,1.003-0.4,2.039-0.471,3.102c-0.282,4.254-0.628,8.58-0.963,12.763l-0.03,0.387
          c-0.086,1.067-0.172,2.134-0.257,3.201c-0.854-9.572-4.024-18.273-9.478-25.968c-3.34-4.708-7.322-8.736-11.838-11.975
          c-0.195-0.14-0.4-0.265-0.674-0.428c-0.133-0.077-0.287-0.169-0.474-0.286c-0.282-0.169-0.644-0.184-0.935-0.042
          c-0.298,0.145-0.503,0.44-0.537,0.774c-0.061,0.605-0.132,1.191-0.207,1.799c-0.151,1.245-0.294,2.421-0.3,3.629
          c-0.067,12.522,2.582,24.256,7.876,34.872c1.475,2.962,3.424,5.524,5.795,7.618c2.351,2.065,4.888,3.283,7.751,3.721
          c0.063,0.011,0.213,0.102,0.236,0.12c0.155,0.311,0.316,0.623,0.477,0.936c0.572,1.105,1.163,2.248,1.457,3.394
          c0.245,0.969,0.245,2.028,0.245,3.15c0,0.411,0,0.825,0.013,1.231c0.275,9.7,0.636,13.078,2.188,21.745
          c-0.947-2.577-2.136-5.161-3.671-7.647c-6.216-10.061-14.113-16.89-24.142-20.875c-0.638-0.257-1.278-0.442-2.02-0.658
          l-0.148-0.044c-0.301-0.088-0.62-0.182-0.961-0.286c-0.308-0.101-0.659-0.032-0.91,0.176c-0.25,0.207-0.381,0.524-0.348,0.854
          c0.074,0.688,0.125,1.357,0.172,2.01c0.103,1.432,0.2,2.784,0.547,4.122c3.236,12.499,8.592,22.454,16.373,30.435
          c3.327,3.412,6.833,5.368,10.718,5.981c0.98,0.153,2.178,0.172,4.206,0.046l0.584-0.035c0.089-0.005,0.167-0.01,0.238-0.01
          c0.16,0,0.173,0,0.284,0.164l2.717,3.731c0.035,0.049,0.086,0.226,0.121,0.348l0.04,0.134c2.82,9.56,6.319,18.768,10.445,27.507
          c-1.857-2.563-3.892-4.903-6.16-7.104c-10.43-10.12-28.262-10.413-30.261-10.413l-0.249,0.002l-0.157,0.029
          c-0.49,0.174-0.755,0.698-0.604,1.191c0.139,0.465,0.269,0.935,0.418,1.487c0.285,1.037,0.581,2.108,0.996,3.144
          c1.976,4.938,5.179,9.688,10.082,14.954c3.369,3.61,7.167,7.271,12.106,9.586c5.409,2.54,10.293,3.16,15.15,1.916
          c0.826-0.217,1.776-0.492,2.593-1.022c0.582-0.373,0.741-0.361,1.313,0.065c0.678,0.504,1.399,0.927,2.099,1.337
          c0.387,0.227,0.777,0.456,1.141,0.686c0.058,0.049,0.182,0.252,0.228,0.327c4.358,7.108,9.159,13.714,14.343,19.74
          c-2.804-2.04-5.683-3.516-8.741-4.499c-9.345-3.011-19.14-2.628-28.841,1.123c-1.448,0.561-3.035,1.411-3.141,1.471
          c-0.222,0.146-0.375,0.382-0.423,0.653c-0.042,0.266,0.027,0.538,0.189,0.746c0.303,0.394,0.596,0.79,0.886,1.183l0.064,0.086
          c0.655,0.892,1.397,1.901,2.229,2.795c3.747,4.017,8.368,6.71,12.804,9.022c6.1,3.165,12.338,4.87,18.542,5.07
          c0.292,0.01,0.584,0.016,0.875,0.016c5.707,0,10.162-1.881,13.596-5.728c0.042-0.03,0.191-0.087,0.273-0.088
          c1.312,0.094,2.559,0.285,3.491,0.44c0.147,0.026,0.328,0.114,0.441,0.216c5.737,5.079,11.813,9.537,18.16,13.331
          c-0.962-0.285-1.953-0.533-2.967-0.732c-6.783-1.304-13.705-0.486-21.306,2.534c-5.128,2.044-9.897,5.047-14.58,9.18
          c-0.386,0.339-0.44,0.922-0.122,1.326c1.657,2.109,3.813,3.29,5.704,4.166c4.612,2.143,9.818,3.515,15.921,4.197
          c0.018,0.001,1.979,0.171,4.729,0.171c1.985,0,3.832-0.089,5.487-0.264c1.582-0.166,3.16-0.437,4.691-0.805
          c7.032-1.712,11.797-5.232,14.527-10.697c0.049-0.047,0.259-0.169,0.525-0.234c1.269-0.315,2.411-0.537,3.497-0.682
          c0.256-0.041,0.575,0.028,0.977,0.19c4.856,1.871,9.995,3.43,15.264,4.632c0.074,0.018,0.151,0.027,0.228,0.027
          c0.354,0,0.68-0.195,0.852-0.513c0.503-0.936,1.116-1.834,1.821-2.669c0.221-0.263,0.287-0.613,0.178-0.937
          C135.21,352.713,134.946,352.475,134.608,352.396z"/>
      </g>
      <path d="M246.915,223.342l40.18-39.166c1.362-1.328,1.854-3.316,1.265-5.125c-0.588-1.811-2.152-3.131-4.036-3.404l-55.523-8.063
        l-24.835-50.313c-0.842-1.707-2.58-2.787-4.483-2.787c-1.903,0-3.642,1.082-4.483,2.787l-24.826,50.313l-55.532,8.063
        c-1.883,0.273-3.448,1.594-4.036,3.404c-0.589,1.809-0.098,3.797,1.265,5.125l40.18,39.166l-9.48,55.299
        c-0.322,1.875,0.449,3.771,1.989,4.889c1.538,1.119,3.578,1.267,5.265,0.381l49.66-26.105l49.66,26.105
        c0.731,0.385,1.53,0.574,2.325,0.574c1.037,0,2.068-0.322,2.939-0.955c1.54-1.117,2.312-3.014,1.989-4.889L246.915,223.342z"/>
    </g>
    </svg>
  </div>

  
  <p className={classes.initialText}>Your search results will appear here </p>
  

  </div>;}
  

const content = loading.value ? <div className={classes.loaderCont}><Loader/></div> : searchResults;

 
  

   let nominationComplete = props.nominatedMovies.length === 5 ? 
   <div className={classes.notif}>
     <p>Nominations complete !</p>
    
     

   </div>: null;


    
   
   let nominatedMovieslist = props.nominatedMovies.length > 0 ? props.nominatedMovies.map((el)=>{
     return <NominatedMovies  key={el.imdbID} movie={el}></NominatedMovies>
   }): <div className={classes.initialNominated}>
     <div>

     <svg id="transporter-empty" xmlns="http://www.w3.org/2000/svg" width="5.4rem" height="90.796" viewBox="0 0 90.796 90.796">
      <rect id="Rectangle_46" data-name="Rectangle 46" width="90.763" height="90.763" fill="none"/>
      <g id="Group_65" data-name="Group 65" transform="translate(0 0)">
        <path id="Path_4" data-name="Path 4" d="M68.1,79.447H22.7a5.675,5.675,0,0,0-5.675,5.675V90.8H73.773V85.122A5.675,5.675,0,0,0,68.1,79.447ZM90.4,47.6l-5.282-2.2-2.2-5.282a.708.708,0,0,0-1.269,0l-2.2,5.282-5.282,2.2a.709.709,0,0,0,0,1.269l5.282,2.2,2.2,5.282a.708.708,0,0,0,1.269,0l2.2-5.282,5.282-2.2a.709.709,0,0,0,0-1.269ZM11.348,5.676,9.146.394a.708.708,0,0,0-1.269,0l-2.2,5.282L.393,7.878a.71.71,0,0,0,0,1.269l5.282,2.2,2.2,5.282a.708.708,0,0,0,1.269,0l2.2-5.282,5.282-2.2a.709.709,0,0,0,0-1.269Z" transform="translate(-0.001 -0.001)" fill="#f5c517"/>
      </g>
    </svg>

     </div>
     <div className={classes.initialText}>
     <p >You have not nominated any movie</p>
     </div>
     
   </div>;

   let socialsSection = socials.openSocials ? <div className={classes.socials}>
       
        
      <div className={classes.socialsicon}>
      <a href="https://twitter.com/intent/tweet?text=I%20just%20nominated%20my%20favorite%20movies%20on%20shoppiesflick.netlify.app" target="blank">
       <div className={classes.small}>

       <svg version="1.1" id="Capa_1"  x="0px" y="0px"
	 viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
<path style={{fill:"#03A9F4"}} d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
	c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
	c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
	c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
	c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
	c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
	C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
	C480.224,136.96,497.728,118.496,512,97.248z"/></svg>
       </div>
    
     </a>
      </div>

      {/* FACEBOOK */}
      <div className={classes.socialsicon}>
        <a href="/">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28px"
      height="28px"
      viewBox="0 0 14222 14222"
    >
      <circle cx="7111" cy="7112" r="7111" fill="#1977f3"></circle>
      <path
        fill="#fff"
        d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
      ></path>
    </svg>
        </a>
  
      </div>

      {/*  */}

      <div className={classes.socialsicon}>
        <a href="/">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="36"
      height="36"
      version="1.1"
      viewBox="0 0 175.216 175.552"
    >
      <defs>
        <filter
          id="filter1769"
          width="1.115"
          height="1.114"
          x="-0.057"
          y="-0.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531"></feGaussianBlur>
        </filter>
        <linearGradient
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="rotate(-90 56.758 96.773) scale(143.29621)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#20B038" stopOpacity="1"></stop>
          <stop offset="0.008" stopColor="#20B038" stopOpacity="1"></stop>
          <stop offset="0.016" stopColor="#21B039" stopOpacity="1"></stop>
          <stop offset="0.023" stopColor="#21B139" stopOpacity="1"></stop>
          <stop offset="0.031" stopColor="#22B139" stopOpacity="1"></stop>
          <stop offset="0.039" stopColor="#22B13A" stopOpacity="1"></stop>
          <stop offset="0.047" stopColor="#23B23A" stopOpacity="1"></stop>
          <stop offset="0.055" stopColor="#23B23B" stopOpacity="1"></stop>
          <stop offset="0.063" stopColor="#24B23B" stopOpacity="1"></stop>
          <stop offset="0.07" stopColor="#24B33B" stopOpacity="1"></stop>
          <stop offset="0.078" stopColor="#25B33C" stopOpacity="1"></stop>
          <stop offset="0.086" stopColor="#25B33C" stopOpacity="1"></stop>
          <stop offset="0.094" stopColor="#26B33C" stopOpacity="1"></stop>
          <stop offset="0.102" stopColor="#26B43D" stopOpacity="1"></stop>
          <stop offset="0.109" stopColor="#27B43D" stopOpacity="1"></stop>
          <stop offset="0.117" stopColor="#27B43E" stopOpacity="1"></stop>
          <stop offset="0.125" stopColor="#28B53E" stopOpacity="1"></stop>
          <stop offset="0.133" stopColor="#28B53E" stopOpacity="1"></stop>
          <stop offset="0.141" stopColor="#29B53F" stopOpacity="1"></stop>
          <stop offset="0.148" stopColor="#29B53F" stopOpacity="1"></stop>
          <stop offset="0.156" stopColor="#2AB640" stopOpacity="1"></stop>
          <stop offset="0.164" stopColor="#2AB640" stopOpacity="1"></stop>
          <stop offset="0.172" stopColor="#2BB640" stopOpacity="1"></stop>
          <stop offset="0.18" stopColor="#2BB741" stopOpacity="1"></stop>
          <stop offset="0.188" stopColor="#2CB741" stopOpacity="1"></stop>
          <stop offset="0.195" stopColor="#2CB742" stopOpacity="1"></stop>
          <stop offset="0.203" stopColor="#2DB842" stopOpacity="1"></stop>
          <stop offset="0.211" stopColor="#2DB842" stopOpacity="1"></stop>
          <stop offset="0.219" stopColor="#2EB843" stopOpacity="1"></stop>
          <stop offset="0.227" stopColor="#2EB843" stopOpacity="1"></stop>
          <stop offset="0.234" stopColor="#2FB944" stopOpacity="1"></stop>
          <stop offset="0.242" stopColor="#2FB944" stopOpacity="1"></stop>
          <stop offset="0.25" stopColor="#30B944" stopOpacity="1"></stop>
          <stop offset="0.258" stopColor="#30BA45" stopOpacity="1"></stop>
          <stop offset="0.266" stopColor="#31BA45" stopOpacity="1"></stop>
          <stop offset="0.273" stopColor="#31BA45" stopOpacity="1"></stop>
          <stop offset="0.281" stopColor="#32BB46" stopOpacity="1"></stop>
          <stop offset="0.289" stopColor="#32BB46" stopOpacity="1"></stop>
          <stop offset="0.297" stopColor="#33BB47" stopOpacity="1"></stop>
          <stop offset="0.305" stopColor="#33BB47" stopOpacity="1"></stop>
          <stop offset="0.313" stopColor="#34BC47" stopOpacity="1"></stop>
          <stop offset="0.32" stopColor="#34BC48" stopOpacity="1"></stop>
          <stop offset="0.328" stopColor="#35BC48" stopOpacity="1"></stop>
          <stop offset="0.336" stopColor="#35BD49" stopOpacity="1"></stop>
          <stop offset="0.344" stopColor="#36BD49" stopOpacity="1"></stop>
          <stop offset="0.352" stopColor="#36BD49" stopOpacity="1"></stop>
          <stop offset="0.359" stopColor="#37BE4A" stopOpacity="1"></stop>
          <stop offset="0.367" stopColor="#37BE4A" stopOpacity="1"></stop>
          <stop offset="0.375" stopColor="#38BE4B" stopOpacity="1"></stop>
          <stop offset="0.383" stopColor="#38BE4B" stopOpacity="1"></stop>
          <stop offset="0.391" stopColor="#39BF4B" stopOpacity="1"></stop>
          <stop offset="0.398" stopColor="#39BF4C" stopOpacity="1"></stop>
          <stop offset="0.406" stopColor="#3ABF4C" stopOpacity="1"></stop>
          <stop offset="0.414" stopColor="#3AC04D" stopOpacity="1"></stop>
          <stop offset="0.422" stopColor="#3BC04D" stopOpacity="1"></stop>
          <stop offset="0.43" stopColor="#3BC04D" stopOpacity="1"></stop>
          <stop offset="0.438" stopColor="#3CC04E" stopOpacity="1"></stop>
          <stop offset="0.445" stopColor="#3CC14E" stopOpacity="1"></stop>
          <stop offset="0.453" stopColor="#3DC14E" stopOpacity="1"></stop>
          <stop offset="0.461" stopColor="#3DC14F" stopOpacity="1"></stop>
          <stop offset="0.469" stopColor="#3EC24F" stopOpacity="1"></stop>
          <stop offset="0.477" stopColor="#3EC250" stopOpacity="1"></stop>
          <stop offset="0.484" stopColor="#3FC250" stopOpacity="1"></stop>
          <stop offset="0.492" stopColor="#3FC350" stopOpacity="1"></stop>
          <stop offset="0.5" stopColor="#40C351" stopOpacity="1"></stop>
          <stop offset="0.508" stopColor="#40C351" stopOpacity="1"></stop>
          <stop offset="0.516" stopColor="#41C352" stopOpacity="1"></stop>
          <stop offset="0.523" stopColor="#41C452" stopOpacity="1"></stop>
          <stop offset="0.531" stopColor="#42C452" stopOpacity="1"></stop>
          <stop offset="0.539" stopColor="#42C453" stopOpacity="1"></stop>
          <stop offset="0.547" stopColor="#43C553" stopOpacity="1"></stop>
          <stop offset="0.555" stopColor="#43C554" stopOpacity="1"></stop>
          <stop offset="0.563" stopColor="#44C554" stopOpacity="1"></stop>
          <stop offset="0.57" stopColor="#44C654" stopOpacity="1"></stop>
          <stop offset="0.578" stopColor="#45C655" stopOpacity="1"></stop>
          <stop offset="0.586" stopColor="#45C655" stopOpacity="1"></stop>
          <stop offset="0.594" stopColor="#46C655" stopOpacity="1"></stop>
          <stop offset="0.602" stopColor="#46C756" stopOpacity="1"></stop>
          <stop offset="0.609" stopColor="#47C756" stopOpacity="1"></stop>
          <stop offset="0.617" stopColor="#47C757" stopOpacity="1"></stop>
          <stop offset="0.625" stopColor="#48C857" stopOpacity="1"></stop>
          <stop offset="0.633" stopColor="#48C857" stopOpacity="1"></stop>
          <stop offset="0.641" stopColor="#49C858" stopOpacity="1"></stop>
          <stop offset="0.648" stopColor="#49C858" stopOpacity="1"></stop>
          <stop offset="0.656" stopColor="#4AC959" stopOpacity="1"></stop>
          <stop offset="0.664" stopColor="#4AC959" stopOpacity="1"></stop>
          <stop offset="0.672" stopColor="#4BC959" stopOpacity="1"></stop>
          <stop offset="0.68" stopColor="#4BCA5A" stopOpacity="1"></stop>
          <stop offset="0.688" stopColor="#4CCA5A" stopOpacity="1"></stop>
          <stop offset="0.695" stopColor="#4CCA5B" stopOpacity="1"></stop>
          <stop offset="0.703" stopColor="#4DCB5B" stopOpacity="1"></stop>
          <stop offset="0.711" stopColor="#4DCB5B" stopOpacity="1"></stop>
          <stop offset="0.719" stopColor="#4ECB5C" stopOpacity="1"></stop>
          <stop offset="0.727" stopColor="#4ECB5C" stopOpacity="1"></stop>
          <stop offset="0.734" stopColor="#4FCC5D" stopOpacity="1"></stop>
          <stop offset="0.742" stopColor="#4FCC5D" stopOpacity="1"></stop>
          <stop offset="0.75" stopColor="#50CC5D" stopOpacity="1"></stop>
          <stop offset="0.758" stopColor="#50CD5E" stopOpacity="1"></stop>
          <stop offset="0.766" stopColor="#51CD5E" stopOpacity="1"></stop>
          <stop offset="0.773" stopColor="#51CD5E" stopOpacity="1"></stop>
          <stop offset="0.781" stopColor="#52CE5F" stopOpacity="1"></stop>
          <stop offset="0.789" stopColor="#52CE5F" stopOpacity="1"></stop>
          <stop offset="0.797" stopColor="#53CE60" stopOpacity="1"></stop>
          <stop offset="0.805" stopColor="#53CE60" stopOpacity="1"></stop>
          <stop offset="0.813" stopColor="#54CF60" stopOpacity="1"></stop>
          <stop offset="0.82" stopColor="#54CF61" stopOpacity="1"></stop>
          <stop offset="0.828" stopColor="#55CF61" stopOpacity="1"></stop>
          <stop offset="0.836" stopColor="#55D062" stopOpacity="1"></stop>
          <stop offset="0.844" stopColor="#56D062" stopOpacity="1"></stop>
          <stop offset="0.852" stopColor="#56D062" stopOpacity="1"></stop>
          <stop offset="0.859" stopColor="#57D163" stopOpacity="1"></stop>
          <stop offset="0.867" stopColor="#57D163" stopOpacity="1"></stop>
          <stop offset="0.875" stopColor="#58D164" stopOpacity="1"></stop>
          <stop offset="0.883" stopColor="#58D164" stopOpacity="1"></stop>
          <stop offset="0.891" stopColor="#59D264" stopOpacity="1"></stop>
          <stop offset="0.898" stopColor="#59D265" stopOpacity="1"></stop>
          <stop offset="0.906" stopColor="#5AD265" stopOpacity="1"></stop>
          <stop offset="0.914" stopColor="#5AD366" stopOpacity="1"></stop>
          <stop offset="0.922" stopColor="#5BD366" stopOpacity="1"></stop>
          <stop offset="0.93" stopColor="#5BD366" stopOpacity="1"></stop>
          <stop offset="0.938" stopColor="#5CD367" stopOpacity="1"></stop>
          <stop offset="0.945" stopColor="#5CD467" stopOpacity="1"></stop>
          <stop offset="0.953" stopColor="#5DD467" stopOpacity="1"></stop>
          <stop offset="0.961" stopColor="#5DD468" stopOpacity="1"></stop>
          <stop offset="0.969" stopColor="#5ED568" stopOpacity="1"></stop>
          <stop offset="0.977" stopColor="#5ED569" stopOpacity="1"></stop>
          <stop offset="0.984" stopColor="#5FD569" stopOpacity="1"></stop>
          <stop offset="0.992" stopColor="#5FD669" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#60D66A" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient299"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient297"
        ></linearGradient>
        <linearGradient id="linearGradient297">
          <stop offset="0" stopColor="#57d163" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#23b33a" stopOpacity="1"></stop>
        </linearGradient>
      </defs>
      <path
        fill="#b3b3b3"
        fillOpacity="1"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="0.353"
        d="M54.532 138.45l2.236 1.324c9.387 5.572 20.15 8.518 31.125 8.523h.024c33.707 0 61.14-27.425 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251-11.547-11.555-26.9-17.921-43.235-17.928-33.733 0-61.165 27.423-61.178 61.13-.005 11.55 3.228 22.8 9.349 32.535l1.455 2.312-6.18 22.559zm-40.81 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.82-36.772.016-40.555 33.02-73.55 73.577-73.55 19.68.01 38.154 7.67 52.047 21.572 13.89 13.903 21.537 32.383 21.53 52.038-.018 40.552-33.027 73.552-73.577 73.552-.003 0 .003 0 0 0h-.032a73.531 73.531 0 01-35.16-8.954zm0 0"
        filter="url(#filter1769)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="1"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="0.353"
        d="M12.966 161.238l10.439-38.114c-6.439-11.154-9.826-23.808-9.822-36.772.017-40.555 33.02-73.55 73.578-73.55 19.681.01 38.154 7.67 52.047 21.572 13.89 13.903 21.537 32.383 21.53 52.038-.017 40.553-33.027 73.552-73.577 73.552-.003 0 .003 0 0 0h-.032a73.531 73.531 0 01-35.16-8.954z"
      ></path>
      <path
        fill="url(#linearGradient1780)"
        fillOpacity="1"
        strokeWidth="0.353"
        d="M87.184 25.227c-33.733 0-61.165 27.423-61.178 61.13-.005 11.55 3.228 22.8 9.35 32.535l1.454 2.312-6.18 22.56 23.147-6.07 2.235 1.324c9.387 5.572 20.15 8.518 31.125 8.524h.024c33.707 0 61.14-27.426 61.153-61.136.006-16.335-6.348-31.696-17.895-43.25-11.546-11.556-26.9-17.922-43.235-17.93z"
      ></path>
      <path
        fill="url(#linearGradient299)"
        fillOpacity="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.515"
        d="M87.184 25.227c-33.733 0-61.165 27.423-61.178 61.13-.005 11.55 3.228 22.8 9.349 32.535l1.455 2.312-6.18 22.559 23.147-6.07 2.235 1.325c9.387 5.572 20.15 8.518 31.125 8.523h.024c33.706 0 61.14-27.425 61.153-61.135.006-16.335-6.348-31.696-17.895-43.251-11.547-11.555-26.9-17.921-43.235-17.928z"
        opacity="1"
        stopColor="#000"
      ></path>
      <path
        fill="#fff"
        fillOpacity="1"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="0.353"
        d="M68.772 55.603c-1.378-3.06-2.827-3.123-4.137-3.177-1.072-.045-2.298-.042-3.523-.042-1.227 0-3.218.46-4.902 2.3-1.685 1.84-6.435 6.286-6.435 15.332 0 9.045 6.588 17.785 7.506 19.013.919 1.226 12.718 20.38 31.405 27.75 15.53 6.123 18.69 4.905 22.061 4.599 3.371-.306 10.877-4.447 12.408-8.74 1.533-4.292 1.533-7.97 1.074-8.74-.46-.767-1.686-1.226-3.525-2.145s-10.877-5.367-12.563-5.98c-1.685-.614-2.91-.92-4.136.92-1.225 1.84-4.746 5.98-5.82 7.206-1.072 1.228-2.144 1.38-3.984.462-1.838-.922-7.76-2.861-14.783-9.124-5.466-4.873-9.155-10.891-10.228-12.73-1.072-1.84-.115-2.835.807-3.752.826-.824 1.839-2.147 2.76-3.22.916-1.074 1.223-1.84 1.835-3.065.613-1.228.307-2.301-.153-3.22-.46-.92-4.032-10.012-5.667-13.647"
      ></path>
    </svg>
        </a>
      </div>
    
    
     
    
        
        
   </div> : null;
   let logo;

   if(window.screen.width <= 480){
     
     logo = 'R'
   }else {
     logo = 'REFLICK'
   }
   
   let movableNav= <div className={classes.topNavMov}>
   <div className={classes.logo}>
   <div>
   {logo}
   
   </div>
   </div>
   <div className={classes.searchBarMov}><span className={classes.searchIcon}>

        <svg id="Search_Icon" data-name="Search Icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <rect id="Rectangle_34" data-name="Rectangle 34" width="24" height="24" fill="none"/>
          <g id="Group_15" data-name="Group 15">
            <line id="Line_1" data-name="Line 1" x1="6.344" y1="6.344" transform="translate(15.656 15.656)" fill="none" stroke="#707070" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
            <circle id="Ellipse_3" data-name="Ellipse 3" cx="8" cy="8" r="8" transform="translate(2 2)" fill="none" stroke="#707070" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
          </g>
        </svg>

          </span><SearchMovies focus={(event)=>onFocusInput(event)} className={classes.searchMov}  onSubmit={(e)=>{onHandleLoading(e)}}></SearchMovies></div>
   <div className={classes.links}>
     <div>
       
     <a className={classes.active} href="/">
     Home
     </a>
     </div>
     <div>
     <a href="/">
       About
     </a>
     </div>
     <div className={classes.profileImg}>
       
     </div>

   </div>
   <div onClick={onShowNominated} className={classes.mob}>
     
        <div style={{position:"relative",width: "3rem", height: "3rem"}}>
        <div className={classes.fave}>
            {props.nominatedMovies.length}
          </div>
          <div className={classes.star}>
          <svg xmlns="http://www.w3.org/2000/svg" 
        width="25"
        height="25"
        viewBox="0 0 74.87 51.05">
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path d="M17.02 42.54H74.87V49.35H17.02z"></path>
          <path d="M17.02 22.12H68.07V28.93H17.02z"></path>
          <path d="M17.02 1.7H74.87V8.51H17.02z"></path>
          <circle fill="#FFC850" cx="5.1" cy="5.1" r="5.1"></circle>
          <circle fill="#FFDC64" cx="5.1" cy="25.52" r="5.1"></circle>
          <circle fill="#FFC850" cx="5.1" cy="45.94" r="5.1"></circle>
        </g>
      </g>
    </svg>
               
          </div>
          
        </div>
   </div>
  

 </div>

  return (
    <div>
      {initialLoad ?
      <div style={{
        // width: "100vw",
         height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
            <Lottie 
              options={defaultOptions}
              height={100}
              width={100}
            />
          </div>
        : 

<div id="iq" className={classes.total}>
      


<div id={classes.overlay}></div>

    <header className={classes.header}>
      <div className={classes.topNav}>
        <div className={classes.logo}>
        <div>
          REFLICK

      
        </div>
        {/* <div >The Shoppies</div> */}
        </div>
        <div className={classes.links}>
          <div>
          <a className={classes.active} href="/">
          Home
          </a>
          </div>
          <div>
          <a href="/">
          About
          </a>
          </div>
          <div className={classes.profileImg}>
            
          </div>
        </div>
        <div className={classes.mob}>
   {/* <div className={classes.hamburger}>
   <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>

   </div> */}
   
      
      <div onClick={onShowNominated} style={{position:"relative"}}>
      <div className={classes.fave}>
          {props.nominatedMovies.length}
        </div>
        <div className={classes.star}>
       
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="25"
        height="25"
        viewBox="0 0 74.87 51.05">
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path d="M17.02 42.54H74.87V49.35H17.02z"></path>
          <path d="M17.02 22.12H68.07V28.93H17.02z"></path>
          <path d="M17.02 1.7H74.87V8.51H17.02z"></path>
          <circle fill="#FFC850" cx="5.1" cy="5.1" r="5.1"></circle>
          <circle fill="#FFDC64" cx="5.1" cy="25.52" r="5.1"></circle>
          <circle fill="#FFC850" cx="5.1" cy="45.94" r="5.1"></circle>
        </g>
      </g>
    </svg>


    {/* <svg xmlns="http://www.w3.org/2000/svg" 
     width="30"
     height="30"
    viewBox="0 0 83.67 60.05">
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path d="M19.02 47.54H83.67V55.15H19.02z"></path>
          <path d="M19.02 24.72H76.07V32.33H19.02z"></path>
          <path d="M19.02 1.9H83.67V9.51H19.02z"></path>
          <circle fill="#FFC850" cx="5.7" cy="5.7" r="5.7"></circle>
          <circle  fill="#FFDC64" cx="5.7" cy="28.52" r="5.7"></circle>
          <circle  fill="#FFC850" cx="5.7" cy="51.34" r="5.7"></circle>
        </g>
      </g>
    </svg> */}
        </div>
        
      </div>
 </div>

      </div>
      <div className={classes.jumbo}>
      <div className={classes.caption}>
      <div className={classes.bigCaption}>
      <div className={classes.section}>
        <span className={classes.animateUp} >Share movie</span>
      </div>
      <div className={classes.section}>
        <span className={classes.animateUp} >recommendat</span>
      </div>
      <div className={classes.section}>
        <span className={classes.animateUp} >with friends</span>
      </div>
   
       </div>
      <h2 className={classes.smallCaption}>Search then share</h2>
      <div className={classes.searchBar}><span className={classes.searchIcon}>

      <svg id="Search_Icon" data-name="Search Icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <rect id="Rectangle_34" data-name="Rectangle 34" width="24" height="24" fill="none"/>
        <g id="Group_15" data-name="Group 15">
          <line id="Line_1" data-name="Line 1" x1="6.344" y1="6.344" transform="translate(15.656 15.656)" fill="none" stroke="#004C3F" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
          <circle id="Ellipse_3" data-name="Ellipse 3" cx="8" cy="8" r="8" transform="translate(2 2)" fill="none" stroke="#004C3F" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
        </g>
      </svg>

        </span><span className={classes.searchBox}>
          <SearchMovies focus={(event)=>{ondecoy()}} className={classes.search} onSubmit={(e)=>{onHandleLoading(e)}}></SearchMovies>
        </span></div>
      

      </div>
      </div>
      
    </header>


  

    <div className={classes.movableNav}>
      {movableNav}
    </div>
    <div className={classes.notifBar}>
    {nominationComplete}
    </div>
    {/* {nominationComplete} */}

    
    
    
    {/* onClick={onCloseSocials} */}
    <main onClick={onCloseSocials}  className={classes.body}>
      
    
      <div className={classes.focus}>
      <div className={classes.searchResultSide} >
        <p className={classes.resultDescription}>Results for:<span className={classes.searchTerm}>{searchTerm}</span></p>
        <div id="cover" className={classes.searchResults}>
          {content}
          {completeOverlay}
          
        
        </div>
        
      </div>
    

      
      {/* HAMBURGER SVG */}
     
     <div className={classes.nominatedSide}>
       <div className={classes.sectionDescription}>
         <p className={classes.green}> Your Nominations</p>
         {/* <div onClick={()=>onShareHandler()}  className = {classes.share}>
           Share
         </div> */}
         {socialsSection}
       </div>
       <div className={classes.nominatedMovies}>
       {nominatedMovieslist}
       </div>
      
    </div>
      </div>
     
      

    </main>
    <p onClick={()=>onShareHandler()}  className = {classes.share}>
           Share
    </p>
    <div style={{transform: show ? 'translateY(0)': 'translateY(85vh)', transition: 'transform .5s '}} className={classes.cont}>
    <div className={classes.downArrow}>
      <p>Nomination List</p>
      <div onClick={onCloseNominated}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        x="0"
        y="0"
        enableBackground="new 0 0 451.847 451.847"
        version="1.1"
        viewBox="0 0 451.847 451.847"
        xmlSpace="preserve"
            >
        <path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"></path>
            </svg>
      </div>
    </div>
      <div className={classes.nominatedSideMob}>
      <div className={classes.sectionDescription}>
           <p className={classes.green}> Your Nominations</p>
           {/* <div onClick={()=>onShareHandler()}  className = {classes.share}>
             Share
           </div> */}
           {socialsSection}
         </div>
         <div className={classes.nominatedMovies}>
         {nominatedMovieslist}
         </div>
      </div>
    </div>
    
    
     
    
{/* <div class="MobileLoader_loader__1dBJf"><div class="MobileLoader_loaderProgressBar__2kARO"><div class="MobileLoader_loadProgress__1LGoL" style="transform: scaleX(1); transform-origin: left center;"></div></div></div> */}
    
    
  </div>
  

      }
      
    </div>

    
    
    );
}


const mapStateToProps = (state) => ({
  searchResults: state.searchResults.moviesResult,
  nominatedMovies: state.nominatedMovies.nominatedMovies,
  nominationComplete: state.nominatedMovies.nominationComplete,
  totalMoviesNumber: state.searchResults.moviesTotal,
  noResult: state.searchResults.noResult
  
  
})

const mapDispatchToProps =(dispatch)=>( {
  fetchMoreMovies: (title,page)=> dispatch(actions.fetchMoreMovies(title,page)),

  
})

export default connect(mapStateToProps,mapDispatchToProps)(App);


