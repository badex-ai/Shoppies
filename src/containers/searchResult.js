import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../components/store/actions/index';

export const searchResult = (props) => {
    return (
        <div onClick={props.onNominate}>
           <p>{props.title}</p> 
        </div>
    )
}

searchResult.propTypes = {
    // props: PropTypes
}

const mapStateToProps = (state) => ({
    
    nominatedMovie: state.searchResults.nominated
})

const mapDispatchToProps = (dispatch) => (
    {
        onNominate: () => dispatch(actions.nominateMovie())
    }
)
    


export default connect(mapStateToProps, mapDispatchToProps)(searchResult)
