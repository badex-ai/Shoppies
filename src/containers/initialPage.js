import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Lottie from 'react-lottie-player';
import reflickGlow from '../assets/data.json'
import classes from './initialPage.css'





export const InitialPage = (props) => {

    return (
        <div className={classes.space}>
          <Lottie             
            loop={false}           
            animationData={reflickGlow}
            play
            style={{ width: 100, height: 100 }}
          />
        </div>
    )
}

// InitialPage.propTypes = {
//     props: PropTypes
// }

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage)



