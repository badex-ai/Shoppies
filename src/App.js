import classes from "./App.css";

import InitialPage from "./containers/initialPage";
import MainContent from "./containers/mainContent";
import { useState, useEffect } from "react";
import ErrorBoundary from "./containers/errorBoundary";
import Alert from "./components/alert";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import About from "./containers/about";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
function App(props) {
	const [initialLoad, setInitialLoad] = useState(true);
	const [showAlert, setShowAlert] = useState(false);
	console.log(performance.getEntriesByType("navigation")[0].type);
	//

	useEffect(() => {
		if (props.error) {
			setShowAlert(true);
		}
	}, [props.error]);

	window.onload = function () {
		setTimeout(() => {
			setInitialLoad(false);
		}, 4000);
	};

	const closeAlertHandler = () => {
		setShowAlert(false);
	};

	let pns = performance.getEntriesByType("navigation")[0].type;

	const page = <h1>HI</h1>;

	let alert = showAlert ? <Alert onClick={() => closeAlertHandler()} /> : null;

	return (
		<div>
			{alert}
			<ErrorBoundary>
				{/* <TransitionGroup> */}
				{/* <CSSTransition
						timeout={250}
						classNames={classes.trans}
						key={location.key}
					> */}
				<Routes>
					<Route path="/about" element={<About />}></Route>
					<Route
						path="/"
						element={
							initialLoad && pns !== "reload" ? (
								<div className={classes.cont}>
									<InitialPage />
								</div>
							) : (
								<MainContent />
							)
						}
					></Route>
					{/* <Route path="/" element={!onload ? page : "loaded"}></Route> */}
				</Routes>
				{/* </CSSTransition> */}
				{/* </TransitionGroup> */}
			</ErrorBoundary>
		</div>
	);
}

const mapStateToProps = (state) => ({
	error: state.searchResults.error,
});

const mapDispatchToProps = (dispatch) => ({
	// fetchMoreMovies: (title,page)=> dispatch(actions.fetchMoreMovies(title,page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// App

{
	/* <div>
		{initialLoad ? (
			<div className={classes.cont}>
				<InitialPage />
			</div>
		) : (
			<div>
				{alert}

				
			</div>
		)}
	</div> */
}
