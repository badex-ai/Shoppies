import * as actionTypes from "./actionTypes";
import axios from "axios";
// import {useErrorHandler} from 'react-error-boundary'
// import searchMovies from '../../../containers/searchMovies';

export const searchMovieFailed = (error) => {
	return {
		type: actionTypes.SEARCH_MOVIE_FAILED,
		error,
	};
};

export const searchMovieSuccess = () => {
	return {
		type: actionTypes.SEARCH_MOVIE_SUCCESS,
	};
};

export const setMovies = (movies) => {
	return {
		type: actionTypes.SET_MOVIES,
		moviesResult: movies,
	};
};
export const setMoreMovies = (movies) => {
	return {
		type: actionTypes.SET_MORE_MOVIES,
		moviesResult: movies,
	};
};

// export errorHandler=(error)={
//     switch (error) {
//         case value:

//             break;

//         default:
//             break;
//     }
// }

export const setLoader = (value) => {
	return {
		type: actionTypes.SET_LOADER,
		status: value,
	};
};
export const setNoResult = () => {
	return {
		type: actionTypes.SET_NO_RESULT,
	};
};

export const nominateMovie = (movie) => {
	return {
		type: actionTypes.NOMINATE_MOVIE,
		selectedMovie: movie,
	};
};

export const setError = (error) => {
	return {
		type: actionTypes.SET_ERROR,
		error: error,
	};
};

export const searchMovie = (movieTitle) => {
	return (dispatch) => {
		dispatch(setLoader(true));
		axios
			.get(
				`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API}&s=${movieTitle}`
			)
			.then((response) => {
				dispatch(setLoader(false));

				if (
					response.data.Error === "Movie not found!" ||
					response.data.Error === "Too many results."
				) {
					dispatch(searchMovieFailed("error"));

					// useErrorHandler(response.data.Error)
				} else {
					dispatch(searchMovieSuccess());

					dispatch(setMovies(response.data));
				}
			})
			.catch((Error) => {
				// dispatch(setError(Error));
				// console.log(Error);
			});
	};
};

export const fetchMoreMovies = (movieTitle, page) => {
	return (dispatch) => {
		axios
			.get(
				`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API}&s=${movieTitle}&page=${page}`
			)
			.then((response) => {
				if (!response.data.Error) {
					dispatch(searchMovieSuccess());
					dispatch(setMoreMovies(response.data));
				}
			})
			.catch((error) => {
				// console.log(error);
			});
	};
};
