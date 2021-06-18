import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Lottie from 'react-lottie';
import reflickGlow from '../assets/data.json'
import classes from './initialPage.css'
// import 
// import {useState,useEffect} from 'react';




export const InitialPage = (props) => {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: reflickGlow,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div className={classes.space}>
                <Lottie 
                  options={defaultOptions}
                  height={100}
                  width={100}
                />
                
              </div>
    )
}

InitialPage.propTypes = {
    props: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage)



