import * as actionTypes from "../actions/actionTypes";
import updateState from "../../shared/utility";

const initialState = {
	moviesResult: [],
	moviesTotal: null,
	nominated: false,
	error: false,
	noResult: false,
	reduxLoader: false,
};

// const searchMovie = (state, action) => {
// 	// const updatedState= {noResult: false};
// 	// return updatedState(state, updatedState )
// };

// const fetchMoreMovies = (state, action) => {
// 	// const updatedState= {noResult: false};
// 	// return updatedState(state, updatedState )
// };

const setError = (state, action) => {
	const updatedState = { error: action.error };
	return updateState(state, updatedState);
};

const searchMoviesFailed = (state, action) => {
	const updatedState = { noResult: true, moviesResult: null };
	return updateState(state, updatedState);
};

const searchMoviesSuccess = (state, action) => {
	const updatedState = { noResult: false };
	return updateState(state, updatedState);
};

// const setNoResult = (state, action) => {
// 	const updatedState = { noResult: true, moviesResult: null };
// 	return updateState(state, updatedState);
// };

const setLoader = (state, action) => {
	//
	const updatedState = { reduxLoader: action.status };
	return updateState(state, updatedState);
};
const setMovies = (state, action) => {
	let results = action.moviesResult.Search;
	const moviesTotalNumber = action.moviesResult.totalResults;

	const uniqueSearchResult = Array.from(
		new Set(results.map((a) => a.imdbID))
	).map((id) => {
		return results.find((a) => a.imdbID === id);
	});

	const updatedState = {
		moviesResult: uniqueSearchResult,
		noResult: false,
		moviesTotal: moviesTotalNumber,
	};
	return updateState(state, updatedState);
};

const setMoreMovies = (state, action) => {
	const newArray = state.moviesResult.slice();
	const results = action.moviesResult.Search;
	const uniqueSearchResult = Array.from(
		new Set(results.map((a) => a.imdbID))
	).map((id) => {
		return results.find((a) => a.imdbID === id);
	});

	newArray.splice(newArray.length, 0, ...uniqueSearchResult);
	const uniqueResult = Array.from(new Set(newArray.map((a) => a.imdbID))).map(
		(id) => {
			return newArray.find((a) => a.imdbID === id);
		}
	);

	const updatedState = { moviesResult: uniqueResult };
	return updateState(state, updatedState);
};

const nominateMovie = (state, action) => {
	const updatedState = { nominated: true };
	return updateState(state, updatedState);
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.NOMINATE_MOVIE:
			return nominateMovie(state, action);

		case actionTypes.SEARCH_MOVIE:
			return searchMovie(state, action);

		case actionTypes.FETCH_MORE_MOVIES:
			return fetchMoreMovies(state, action);

		case actionTypes.SET_LOADER:
			return setLoader(state, action);

		case actionTypes.SEARCH_MOVIE_FAILED:
			return searchMoviesFailed(state, action);

		case actionTypes.SEARCH_MOVIE_SUCCESS:
			return searchMoviesSuccess(state, action);

		case actionTypes.SET_MOVIES:
			return setMovies(state, action);

		case actionTypes.SET_MORE_MOVIES:
			return setMoreMovies(state, action);

		case actionTypes.SET_NO_RESULT:
			return setNoResult(state, action);

		case actionTypes.SET_ERROR:
			return setError(state, action);

		default:
			return state;
	}
};

export default reducer;
