import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../components/store/actions/index'
import classes from './nominatedMovies.css'



 function nominatedMovies(props) {
    let img = props.movie.Poster ? <img className={classes.img} src={props.movie.Poster} alt=""/> :<div className={classes.defaultImg}>
        {/* <img src="../assets/clapperbrd.svg" alt="" />\ */}
        
             <div className={classes.defaultsvg}>
                 <svg
                           xmlns="http://www.w3.org/2000/svg"
                           x="0"
                           y="0"
                           enableBackground="new 0 0 480 480"
                           version="1.1"
                           viewBox="0 0 480 480"
                           width="4rem"
                           height="4rem"
                          
                         >
                           <path d="M399.6 204.8c0-.2-.1-.3-.2-.5 0-.1 0-.1-.1-.2-.3-.5-.6-1-1-1.4l-.3-.3c-.4-.4-.8-.7-1.3-.9-.2-.1-.3-.2-.5-.2-.6-.3-1.3-.4-2-.4H156.3l-1.5-1.9 74.6-23.4.9-.3 1.3-.4 71.7-22.5 15.2-4.8 22.5-7.1 54.8-17.2c3-1 4.7-4.2 3.8-7.3l-13.9-44.2c0-.1-.1-.2-.2-.3-.2-.5-.5-1-.8-1.4-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.4-.4-.9-.8-1.4-1-.1-.1-.3-.1-.4-.2-.5-.2-1-.4-1.5-.4-.2 0-.4-.1-.6-.1-.7-.1-1.4 0-2 .2l-161.7 50.7-15 4.7-25.7 8.1-73.3 23H81.8c-3.2 0-5.8 2.6-5.8 5.8v237.2c0 9.6 7.8 17.4 17.4 17.4h289.3c9.6 0 17.4-7.8 17.4-17.4V206.7c0-.1-.1-.2-.1-.3-.1-.6-.2-1.1-.4-1.6zm-17 7.7l-26 34.7h-31.8l26-34.7h31.8zm-46.3 0l-26 34.7h-31.8l26-34.7h31.8zm-46.2 0l-26 34.7h-31.8l26-34.7h31.8zm-46.3 0l-26 34.7H186l26-34.7h31.8zm-46.3 0l-26 34.7h-2.9v-28.9c0-1.3-.4-2.6-1.3-3.6l-1.7-2.1 31.9-.1zM380 91.9l6.9 22.1-16.6 5.2 9.7-27.3zm-30.1-2.7l21.1-6.6-14.5 40.9-19.3 6-11.1 3.5 14.5-40.9 9.3-2.9zm-49.7 15.6l26.6-8.4-14.5 40.9-30.4 9.5 14.5-40.9 3.8-1.1zm-17.5 5.5l-14.5 40.9-30.3 9.5 14.5-40.9 30.3-9.5zm-74.5 23.4l30.4-9.5-14.5 40.9-30.4 9.5 14.5-40.9zm-13.8 4.3L180 179l-18.7 5.9-11.7 3.7 14.5-40.9 30.3-9.7zm-44.2 13.9l-10.1 28.7-16.3-20.4 26.4-8.3zm-62.6 14.3h26.1l26.7 33.4 8.5 10.7 4 5.1.7.9 3.2 4v26.9H87.6v-81zm300.8 231.4c0 3.2-2.6 5.8-5.8 5.8H93.4c-3.2 0-5.8-2.6-5.8-5.8V258.8h300.8v138.8zm0-150.4H371l17.4-23.1v23.1z"></path>
                           <path d="M99.1 224H110.69999999999999V235.6H99.1z"></path>
                           <path d="M99.1 177.8H110.69999999999999V189.4H99.1z"></path>
                           <path d="M133.9 224H145.5V235.6H133.9z"></path>
                           <path d="M110.7 293.5H365.3V305.1H110.7z"></path>
                           <path d="M110.7 339.7L110.7 351.3 185.9 351.3 185.9 386 197.5 386 197.5 351.3 278.5 351.3 278.5 386 290.1 386 290.1 351.3 365.3 351.3 365.3 339.7z"></path>
                         </svg>
             </div>
        
    </div>


    return (
        <div className={classes.card} >
            
            <div className={classes.description}>
                
                {img}
                <div className={classes.descriptCont}>
                    <div className={classes.title}>
                    <p>{props.movie.Title}</p>
                    </div>
                    <div className={classes.year}>
                    <p>{props.movie.Year}</p>
                    </div>
                    <div className={classes.rating}>
                    <svg id="star_Icon" data-name="star Icon" xmlns="http://www.w3.org/2000/svg" width="1.6rem" height="1.6rem" viewBox="0 0 20 20">
                    <rect id="Rectangle_45" data-name="Rectangle 45" width="20" height="20" fill="none"/>
                    <g id="Group_55" data-name="Group 55" transform="translate(0.477 1.001)">
                        <path id="Path_3" data-name="Path 3" d="M10.616,1.38l2.57,5.154,5.747.828a.685.685,0,0,1,.555.463.675.675,0,0,1-.174.7l-4.159,4.009.982,5.666a.678.678,0,0,1-.274.666.693.693,0,0,1-.724.052L10,16.244,4.86,18.917a.694.694,0,0,1-.724-.053.678.678,0,0,1-.274-.665l.982-5.663L.684,8.527a.675.675,0,0,1-.174-.7.685.685,0,0,1,.555-.463l5.747-.832,2.57-5.154a.692.692,0,0,1,1.234,0Z" transform="translate(-0.477 -1.001)" fill="#f5c517"/>
                    </g>
                    </svg>
                    <p>{props.movie.Metascore}</p>
                    </div>
                </div>  
            
            </div>
            
            <div className={classes.remove} onClick={()=>{props.onRemoveNominated(props.movie)}} >
            <svg id="Remove_Icon" data-name="Remove Icon" xmlns="http://www.w3.org/2000/svg" width="3.2rem" height="3.2rem" viewBox="0 0 32 32">
            <rect id="Rectangle_44" data-name="Rectangle 44" width="32" height="32" fill="none"/>
            <g id="Group_50" data-name="Group 50">
                <line id="Line_2" data-name="Line 2" x1="12" y2="12" transform="translate(10 10)" fill="none" stroke="#004c3f" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
                <line id="Line_3" data-name="Line 3" x1="12" y1="12" transform="translate(10 10)" fill="none" stroke="#004c3f" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
            </g>
            </svg>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
    nominationComplete: state.nominatedMovies.nominationComplete
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onRemoveNominated: (movie)=>dispatch(actions.removeMovie(movie))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(nominatedMovies)
