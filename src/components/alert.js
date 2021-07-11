import React from 'react'
import classes from './alert.css'
import CancelIcon  from './icons/cancel_icon'

function alert(props) {

  
    return (
        <React.Fragment>
            <div className={classes.alert} role="alert">
     <p>Something went wrong !</p>
     <button onClick={props.onClick} className={classes.cancel}>
         <CancelIcon  size={"2.5rem"} color={"#fff"}/>
   
     </button>

     </div>
        </React.Fragment>
        
    )
}

export default alert
