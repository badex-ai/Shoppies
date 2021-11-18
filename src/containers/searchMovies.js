import React, { useState, useRef } from "react";

import classes from "./searchMovies.css";
import { connect } from "react-redux";
import * as actions from "../components/store/actions/index";

function SearchMovies(props) {
	const input = useRef(null);
	const [title, setTitle] = useState({ value: "" });
	// const [msg, setMsg] = useState("Enter movie title");
	// const [err, setErr] = useState(true);

	const inputChangeHandler = (e) => {
		setTitle({ value: e.target.value });
		// if (title.value.length >= 2) {
		// 	setErr(false);
		// }
	};

	const move = (event) => {
		props.focus(event);
	};

	const onSearchHandler = (e) => {
		e.preventDefault();
		const searchterm = title.value.trim();

		if (searchterm !== "" && searchterm.length >= 2) {
			props.onSubmit(title.value);
			props.onSearchMovie(title.value);

			setTitle({ value: "" });
		} else {
			// setErr(true);
		}

		input.current.blur();
	};

	return (
		<form className={classes.form} onSubmit={(e) => onSearchHandler(e)}>
			<input
				autoComplete="off"
				ref={input}
				onFocus={move}
				className={classes.input}
				type="text"
				name="title"
				onChange={(e) => {
					inputChangeHandler(e);
				}}
				value={title.value}
				placeholder="Enter movie title"
			></input>
			{/* <button type="submit" > search</button> */}
		</form>
	);
}

// SearchMovies.propTypes = {

// }

const mapStateToProps = (state) => {
	return {
		loadingState: state.searchResults.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchMovie: (movie) => dispatch(actions.searchMovie(movie)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
