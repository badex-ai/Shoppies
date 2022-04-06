import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types'

import NominatedMovies from "./nominatedMovies";
import SearchResult from "./searchResult";
import SearchMovies from "./searchMovies";
import Loader from "../components/shared/loader";

import * as actions from "../components/store/actions/index";
import InitialIcon from "../components/icons/initail_Icon";
import EmptySelectionIcon from "../components/icons/emtpySelection_icon";
import CancelIcon from "../components/icons/cancel_icon";
import FacebookIcon from "../components/icons/facebook_icon";
import WhatsappIcon from "../components/icons/whatsapp_icon";
import Twitter from "../components/icons/twitter_icon";
import { v4 as uuidv4 } from "uuid";
import Reflick from "../assets/SVG/reflick";

import Smallref from "../assets/SVG/smallref";

import classes from "./mainContent.css";

// import * as actions from '../components/store/actions/index'
import MovieResultContainer from "./movieResultContainer";

function MainContent(props) {
	const [socials, setSocials] = useState({ openSocials: false });
	const [notif, setNotif] = useState(false);
	const [searchTerm, setSearchTerm] = useState("Movie Title");
	const [show, setShow] = useState(false);
	const [showShare, setShowShare] = useState(false);

	useEffect(() => {}, [props.reduxLoader]);

	useEffect(() => {
		// console.log(props.nominatedMovies," shows the nominated movies")
		if (props.nominatedMovies.length > 0) {
			setTimeout(() => {
				setShowShare(true);
			}, 100);
		} else {
			setTimeout(() => {
				setShowShare(false);
			}, 100);
		}
	}, [props.nominatedMovies, props.nominatedMovies.length]);

	useEffect(() => {
		setNotif(props.nominationComplete);
	}, [props.nominationComplete]);

	window.onscroll = function () {
		if (window.screen.width <= 480) {
			scrollmobileFunction();
		} else {
			scrollDeskFunction();
		}
	};

	function scrollmobileFunction() {
		if (
			document.body.scrollTop > 290 ||
			document.documentElement.scrollTop > 290 ||
			window.scrollY > 290
		) {
			document.getElementById("movableNav").style.top = "0rem";
		} else {
			document.getElementById("movableNav").style.top = "-10rem";
		}
	}

	function scrollDeskFunction() {
		if (
			document.body.scrollTop > 290 ||
			document.documentElement.scrollTop > 290 ||
			window.scrollY > 290
		) {
			document.getElementById("movableNav").style.top = "0rem";
		} else {
			document.getElementById("movableNav").style.top = "-10rem";
		}
	}
	const ondecoy = () => {
		return;
	};

	const onFocusInput = () => {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			setTimeout(() => {
				document.getElementById("movableNav").style.top = "-0rem";
				document.getElementById("movableNav").style.position = "fixed";
			}, 300);
		} else return;
	};

	const onCloseNotif = () => {
		setNotif(false);
	};
	const onShowNominated = () => {
		document.getElementById("overlay").style.display = "block";
		document.getElementById("overlay").style.opacity = "1";

		document.getElementById("overlay").style.transition = "opacity .3s ease";

		setShow(true);
	};

	const onCloseNominated = () => {
		document.getElementById("overlay").style.display = "none";
		document.getElementById("overlay").style.opacity = "0";

		document.getElementById("overlay").style.transition = "opacity .3s ease";

		setShow(false);
	};

	const onHandleLoading = (event) => {
		//
		setSearchTerm(event);
	};

	const onShareHandler = () => {
		setSocials({ openSocials: !socials.openSocials });
	};

	const onCloseSocials = () => {
		setSocials({ openSocials: false });
	};

	let share = showShare ? (
		<button onClick={() => onShareHandler()} className={classes.share}>
			share
		</button>
	) : null;

	let searchResults;

	// completin overlay Area
	const completeOverlay = notif ? (
		<div className={classes.completeOverlay}>
			<div className={classes.complete}>
				<button
					onClick={onCloseNotif}
					onKeyPress={onCloseNotif}
					className={classes.cancelNotif}
				>
					<CancelIcon size={"2.2rem"} color={"#000"} />
				</button>
				<div className={classes.animoj}>
					<img
						style={{ width: "15rem" }}
						src="https://res.cloudinary.com/dkxbadex/image/upload/v1625273933/Reflick/animoj.png"
						alt="complete"
					/>
				</div>
				<p>Selections complete</p>
				<p>share now</p>
			</div>
		</div>
	) : null;

	// requested movies display Area
	if (props.searchResults === null) {
		console.log(props.searchResults);
		// setLoading({value: false});
		searchResults = (
			<div className={classes.initial}>
				<div className={classes.initialSvg}></div>
				<div className={classes.initialText}>No result found </div>
			</div>
		);
	} else if (props.searchResults.length > 0) {
		console.log(props.searchResults);

		const results = props.searchResults.map((mov) => {
			return (
				<SearchResult
					key={mov.imdbID}
					title={mov.Title}
					movieInfo={mov}
				></SearchResult>
			);
		});
		// setLoading({value: false});
		searchResults = (
			<MovieResultContainer passedSearchTerm={searchTerm}>
				{results}
			</MovieResultContainer>
		);
	} else {
		searchResults = (
			<div className={classes.initial}>
				<div className={classes.initialSvg}>
					<InitialIcon />
				</div>

				<p className={classes.initialText}>
					Your search results will appear here{" "}
				</p>
			</div>
		);
	}

	const content = props.reduxLoader ? (
		<div className={classes.loaderCont}>
			<Loader />
		</div>
	) : (
		searchResults
	);

	let socialsSection = socials.openSocials ? (
		<ul className={classes.socials}>
			{/* twitter        */}
			<li key={uuidv4()} className={classes.socialsicon}>
				<a
					href="https://twitter.com/intent/tweet?text=I%20just%20nominated%20my%20favorite%20movies%20on%20shoppiesflick.netlify.app"
					target="blank"
				>
					<div className={classes.small}>
						<Twitter />
					</div>
				</a>
			</li>

			{/* FACEBOOK */}
			{/* <li key={uuidv4()} className={classes.socialsicon}>
				<a href="/">
					<FacebookIcon />
				</a>
			</li> */}

			{/*  whatsapp */}

			<li key={uuidv4()} className={classes.socialsicon}>
				<a
					href="whatsapp://send?text=This is WhatsApp sharing example using link"
					data-action="share/whatsapp/share"
					target="_blank"
				>
					<WhatsappIcon />
				</a>
			</li>
		</ul>
	) : null;

	let nominationComplete =
		props.nominatedMovies.length === 5 && notif === false ? (
			<div className={classes.notif}>
				<p>Nominations complete !</p>
			</div>
		) : null;

	// selected Movies Area
	let nominatedMovieslist =
		props.nominatedMovies.length > 0 ? (
			props.nominatedMovies.map((el) => {
				return (
					<div>
						<NominatedMovies key={el.imdbID} movie={el}></NominatedMovies>
					</div>
				);
			})
		) : (
			<div className={classes.initialNominated}>
				<div>
					<EmptySelectionIcon />
				</div>
				<div className={classes.initialText}>
					<p>Your selection</p>
				</div>
			</div>
		);

	let logo;
	if (window.screen.width <= 480) {
		logo = <Smallref />;
	} else {
		logo = <Reflick />;
	}

	let movableNav = (
		<div id="movNav" className={classes.topNavMov}>
			<div className={classes.logo}>{logo}</div>

			<div className={classes.searchBarMov}>
				<span className={classes.searchIcon}>
					<svg
						id="Search_Icon"
						data-name="Search Icon"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<rect
							id="Rectangle_34"
							data-name="Rectangle 34"
							width="24"
							height="24"
							fill="none"
						/>
						<g id="Group_15" data-name="Group 15">
							<line
								id="Line_1"
								data-name="Line 1"
								x1="6.344"
								y1="6.344"
								transform="translate(15.656 15.656)"
								fill="none"
								stroke="#707070"
								strokeLinecap="square"
								strokeMiterlimit="10"
								strokeWidth="2"
							/>
							<circle
								id="Ellipse_3"
								data-name="Ellipse 3"
								cx="8"
								cy="8"
								r="8"
								transform="translate(2 2)"
								fill="none"
								stroke="#707070"
								strokeLinecap="square"
								strokeMiterlimit="10"
								strokeWidth="2"
							/>
						</g>
					</svg>
				</span>
				<SearchMovies
					focus={(event) => onFocusInput(event)}
					className={classes.searchMov}
					onSubmit={(e) => {
						onHandleLoading(e);
					}}
				></SearchMovies>
			</div>

			<nav className={classes.links}>
				{/* <div>
					<a className={classes.active} href="/">
						Home
					</a>
				</div> */}
				<div>
					<a href="/">ABOUT</a>
				</div>
			</nav>

			<div onClick={onShowNominated} className={classes.mob}>
				<div style={{ position: "relative", width: "3rem", height: "3rem" }}>
					<div className={classes.fave}>{props.nominatedMovies.length}</div>
					<div className={classes.star}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							viewBox="0 0 74.87 51.05"
						>
							<g data-name="Layer 2">
								<g data-name="Layer 1">
									<path d="M17.02 42.54H74.87V49.35H17.02z"></path>
									<path d="M17.02 22.12H68.07V28.93H17.02z"></path>
									<path d="M17.02 1.7H74.87V8.51H17.02z"></path>
									<circle fill="#FFC850" cx="5.1" cy="5.1" r="5.1"></circle>
									<circle fill="#FFDC64" cx="5.1" cy="25.52" r="5.1"></circle>
									<circle fill="#FFC850" cx="5.1" cy="45.94" r="5.1"></circle>
								</g>
							</g>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div id="iq" className={classes.total}>
			<div onClick={onCloseSocials} className={classes.majorComp}>
				<div id="overlay" className={classes.overlay}></div>

				<header className={classes.header}>
					<div className={classes.topNav}>
						<div className={classes.logo}>
							<Reflick />
						</div>
						<div className={classes.links}>
							{/* <div>
								<a className={classes.active} href="/">
									Home
								</a>
							</div> */}
							<div>
								<a href="/">ABOUT</a>
							</div>
						</div>
						<div className={classes.mob}>
							<div onClick={onShowNominated} style={{ position: "relative" }}>
								<div className={classes.fave}>
									{props.nominatedMovies.length}
								</div>
								<div className={classes.star}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										viewBox="0 0 74.87 51.05"
									>
										<g data-name="Layer 2">
											<g data-name="Layer 1">
												<path d="M17.02 42.54H74.87V49.35H17.02z"></path>
												<path d="M17.02 22.12H68.07V28.93H17.02z"></path>
												<path d="M17.02 1.7H74.87V8.51H17.02z"></path>
												<circle
													fill="#FFC850"
													cx="5.1"
													cy="5.1"
													r="5.1"
												></circle>
												<circle
													fill="#FFDC64"
													cx="5.1"
													cy="25.52"
													r="5.1"
												></circle>
												<circle
													fill="#FFC850"
													cx="5.1"
													cy="45.94"
													r="5.1"
												></circle>
											</g>
										</g>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.jumbo}>
						<div className={classes.caption}>
							<div className={classes.bigCaption}>
								<div className={classes.section}>
									<span>Share your</span>
								</div>
								<div className={classes.section}>
									<span>favorite movies</span>
								</div>
								<div className={classes.section}>
									<span>with friends</span>
								</div>
							</div>
							<h2 className={classes.smallCaption}>Search then share</h2>
							<div className={classes.searchBar}>
								<span className={classes.searchIcon}>
									<svg
										id="Search_Icon"
										data-name="Search Icon"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<rect
											id="Rectangle_34"
											data-name="Rectangle 34"
											width="24"
											height="24"
											fill="none"
										/>
										<g id="Group_15" data-name="Group 15">
											<line
												id="Line_1"
												data-name="Line 1"
												x1="6.344"
												y1="6.344"
												transform="translate(15.656 15.656)"
												fill="none"
												stroke="#004C3F"
												strokeLinecap="square"
												strokeMiterlimit="10"
												strokeWidth="2"
											/>
											<circle
												id="Ellipse_3"
												data-name="Ellipse 3"
												cx="8"
												cy="8"
												r="8"
												transform="translate(2 2)"
												fill="none"
												stroke="#004C3F"
												strokeLinecap="square"
												strokeMiterlimit="10"
												strokeWidth="2"
											/>
										</g>
									</svg>
								</span>
								<span className={classes.searchBox}>
									<SearchMovies
										focus={(event) => {
											ondecoy();
										}}
										className={classes.search}
										onSubmit={(e) => {
											onHandleLoading(e);
										}}
									></SearchMovies>
								</span>
							</div>
						</div>
					</div>
				</header>

				<nav id="movableNav" className={classes.movableNav}>
					{movableNav}
				</nav>
				<section className={classes.notifBar}>{nominationComplete}</section>

				<main className={classes.body}>
					<div className={classes.focus}>
						<div className={classes.searchResultSide}>
							<p className={classes.resultDescription}>
								Results for:
								<span className={classes.searchTerm}>{searchTerm}</span>
							</p>
							<div id="cover" className={classes.searchResults}>
								{content}
								{completeOverlay}
							</div>
						</div>

						<div className={classes.nominatedSide}>
							<div className={classes.sectionDescription}>
								<p className={classes.green}> Your Nominations</p>
								{/* <div onClick={()=>onShareHandler()}  className = {classes.share}>
                            Share
                            </div> */}
							</div>
							<div className={classes.nominatedMovies}>
								{socialsSection}
								{nominatedMovieslist}
								{/* {socialsSection} */}
							</div>
						</div>
					</div>
				</main>

				<div
					style={{
						transform: show ? "translateY(0)" : "translateY(85vh)",
						transition: "transform .5s ",
					}}
					className={classes.cont}
				>
					<div className={classes.downArrow}>
						<div onClick={onCloseNominated}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								x="0"
								y="0"
								enableBackground="new 0 0 451.847 451.847"
								version="1.1"
								viewBox="0 0 451.847 451.847"
								xmlSpace="preserve"
							>
								<path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"></path>
							</svg>
						</div>

						<p>Share</p>
					</div>
					<div className={classes.nominatedSideMob}>
						<div className={classes.sectionDescription}>
							<p className={classes.green}> Your Nominations</p>
							{/* <div onClick={()=>onShareHandler()}  className = {classes.share}>
                        Share
                    </div> */}
						</div>
						<div className={classes.nominatedMovies}>
							{socialsSection}
							{nominatedMovieslist}
						</div>
					</div>
				</div>
			</div>

			{share}
		</div>
	);
}

// MainContent.propTypes = {
//     props: PropTypes
// }

const mapStateToProps = (state) => {
	return {
		searchResults: state.searchResults.moviesResult,
		nominatedMovies: state.nominatedMovies.nominatedMovies,
		nominationComplete: state.nominatedMovies.nominationComplete,
		// totalMoviesNumber: state.searchResults.moviesTotal,
		reduxNoResult: state.searchResults.noResult,
		reduxLoader: state.searchResults.reduxLoader,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMoreMovies: (title, page) =>
			dispatch(actions.fetchMoreMovies(title, page)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
