import React from 'react';
import classes from './loader.css'

function Loader() {
    return (
        <React.Fragment>
            <div className={classes.spinnerEclipse}>
            <div className={classes.spinner}>
            <div>
            </div>
            </div>
            </div>

            <div>
                <div className={classes.btspinner}></div>
            </div>
        </React.Fragment>
    )
}

export default Loader
