import React, { Component } from 'react'
import classes from './errorBoundary.css'





export class ErrorBoundary extends Component {
    state= {error: null, errorInfo: null}

    componentDidCatch(error) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          error: error,
        })
        // You can also log error messages to an error reporting service here
      }

     error = this.state.error ? <div className={classes.cont}> <div>Something went wrong! </div></div>: null;

    

    render() {
        // if (this.state.errorInfo) {
        //     // Error path
        //     return (
        //       <div className={classes.bod}>
        //         <h2>Something went wrong.</h2>
                
        //       </div>
        //     );
        //   }
          // Normally, just render children
          return (
            <div>
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
            {this.props.children}
            </div>
            
            );
        }  
        
    }
    // static propTypes = {

    // }


export default ErrorBoundary

