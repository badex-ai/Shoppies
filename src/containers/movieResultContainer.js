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
	// const [prevY, setPrevY] = useState(0);

	// useEffect(() => {
	// 	const onLoadMoreMovies = () => {
	// 		const newpage = page + 1;
	// 		setPage(newpage);
	// 		props.fetchMoreMovies(props.passedSearchTerm, newpage);
	// 	};
	// 	const handleObserver = (entities, observer) => {
	// 		const entry = entities[0];
	// 		const y = entry.boundingClientRect.y;

	// 		if (prevY > y) {
	// 			if (
	// 				props.totalMoviesNumber > props.searchResults.length &&
	// 				entry.intersectionRatio === 1
	// 			) {
	// 				// setIsFinished(false)

	// 				onLoadMoreMovies();
	// 			}

	// 			if (props.totalMoviesNumber === props.searchResults.length) {
	// 				setIsFinished(true);
	// 			}
	// 		}
	// 		setPrevY(y);
	// 	};
	// 	var options = {
	// 		root: document.getElementById("scrollableDiv"),
	// 		// , // Page as root
	// 		rootMargin: "0px",
	// 		threshold: 0,
	// 	};
	// 	const observed = document.getElementById("try");

	// 	const observer = new IntersectionObserver((entities, self) => {
	// 		handleObserver(entities);
	// 	}, options);
	// 	observer.observe(observed);
	// 	console.log("ping");

	// 	// return observer.unobserve()
	// }, [page, prevY, props.searchResults]);

	// useEffect(() => {
	// 	console.log(props.totalMoviesNumber);
	// }, [props.children]);

	if (props.totalMoviesNumber === props.searchResults.length) {
		setIsFinished(true);
	}

	const onLoadMoreMovies = () => {
		const newpage = page + 1;
		setPage(newpage);
		props.fetchMoreMovies(props.passedSearchTerm, newpage);
	};

	let load = isFinished ? (
		<div className={classes.finished}></div>
	) : (
		<div className={classes.svg}>
			<ScrollLoader />
		</div>
	);

	return (
		<ul className={classes.scrollableDiv}>
			<InfiniteScroll
				dataLength={props.searchResults.length}
				next={onLoadMoreMovies}
				hasMore={props.totalMoviesNumber > props.searchResults.length}
				loader={<ScrollLoader />}
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

{
	/* <ul className={classes.scrollableDiv}>
			{props.children}

			<div className={classes.try} id="try">
				{load}
			</div>
		</ul> */
}
