import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types'
import { connect } from "react-redux";
import * as actions from "../components/store/actions/index";
import classes from "./movieResultContainer.css";
import ScrollLoader from "../components/shared/scrollLoader";
import InfiniteScroll from "react-infinite-scroll-component";

export const MovieResultContainer = (props) => {
	const [isFinished, setIsFinished] = useState(false);

	const [page, setPage] = useState(1);

	if (props.totalMoviesNumber === props.searchResults.length) {
		setIsFinished(true);
	}

	const onLoadMoreMovies = () => {
		const newpage = page + 1;
		setPage(newpage);
		props.fetchMoreMovies(props.passedSearchTerm, newpage);
	};

	let load = (
		<div className={classes.svg}>
			<ScrollLoader />
		</div>
	);

	return (
		<ul id="scrollableDiv" className={classes.scrollableDiv}>
			<InfiniteScroll
				dataLength={props.searchResults.length}
				next={onLoadMoreMovies}
				hasMore={props.totalMoviesNumber > props.searchResults.length}
				loader={load}
				scrollableTarget="scrollableDiv"
				endMessage={<div className={classes.finished}></div>}
			>
				{props.children}
			</InfiniteScroll>
		</ul>
	);
};

// MovieResultContainer.propTypes = {
//     props: PropTypes
// }

const mapStateToProps = (state) => ({
	searchResults: state.searchResults.moviesResult,
	totalMoviesNumber: state.searchResults.moviesTotal,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMoreMovies: (title, page) =>
		dispatch(actions.fetchMoreMovies(title, page)),
});

export default React.memo(
	connect(mapStateToProps, mapDispatchToProps)(MovieResultContainer)
);
