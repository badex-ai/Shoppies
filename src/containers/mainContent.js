import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types'

import NominatedMovies from "./nominatedMovies";
import SearchResult from "./searchResult";
import SearchMovies from "./searchMovies";
import Loader from "../components/shared/loader";

import * as actions from "../components/store/actions/index";
import InitialIcon from "../components/icons/initail_Icon";
import EmptySelectionIcon from "../components/icons/emptySelection_icon";
import CancelIcon from "../components/icons/cancel_icon";
import FacebookIcon from "../components/icons/facebook_icon";
import WhatsappIcon from "../components/icons/whatsapp_icon";
import Twitter from "../components/icons/twitter_icon";
import { v4 as uuidv4 } from "uuid";
import Reflick from "../assets/SVG/reflick";

import Smallref from "../assets/SVG/smallref";
import { NavLink } from "react-router-dom";

import classes from "./mainContent.css";
import SearchIcon from "../components/icons/search_icon";
import MobileListIcon from "../components/icons/mobileList_icon";
import Ok from "../components/icons/ok";
import HeaderNav from "./header";

// import * as actions from '../components/store/actions/index'
import MovieResultContainer from "./movieResultContainer";

function MainContent(props) {
	const [socials, setSocials] = useState({ openSocials: false });
	const [notif, setNotif] = useState(false);
	const [searchTerm, setSearchTerm] = useState("Movie Title");
	const [show, setShow] = useState(false);
	const [showShare, setShowShare] = useState(false);
	const [searchTermValue, setsearchTermValue] = useState();

	const searchBarRef = useRef(null);
	const movNavRef = useRef(null);

	useEffect(() => {
		// setSearchTerm(me);
	}, [props.reduxLoader, props.results, props.totalMoviesNumber]);

	useEffect(() => {
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

	let onFocusInput;

	if (location.href === `${location.protocol}//${location.host}/`) {
		onFocusInput = () => {
			var userAgent = navigator.userAgent || navigator.vendor || window.opera;
			if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
				setTimeout(() => {
					document.getElementById("movableNav").style.top = "-0rem";
					document.getElementById("movableNav").style.position = "fixed";
				}, 300);
			} else return;
		};

		onscroll = function () {
			if (location.href !== `${location.protocol}//${location.host}/`) {
				return;
			} else if (window.screen.width <= 480) {
				scrollMobileFunction();
			} else {
				scrollDeskFunction();
			}
		};

		function scrollMobileFunction() {
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
				location.href !== `${location.protocol}//${location.host}/about` &&
				document.getElementById("iq").getBoundingClientRect().top <=
					8.800000190734863
			) {
				document.getElementById("movableNav").style.top = "0rem";
			} else {
				document.getElementById("movableNav").style.top = "-10rem";
			}
		}
	}

	const ondecoy = () => {
		return;
	};

	const onCloseNotif = () => {
		setNotif(false);
	};

	// for the mobile
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

	//

	const onHandleLoading = (event) => {
		setSearchTerm(event);
	};

	function separator(numb) {
		var str = numb.toString().split(".");
		str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return str.join(".");
	}

	let num;
	if (props.totalMoviesNumber) {
		num = separator(props.totalMoviesNumber);
	} else {
		num = "";
	}

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
	if (props.results === null) {
		searchResults = (
			<div className={classes.initial}>
				<div className={classes.initialSvg}></div>
				<div className={classes.initialText}>No result found </div>
			</div>
		);
	} else if (props.results.length > 0) {
		const results = props.results.map((mov) => {
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
		<div ref={movNavRef} id="movNav" className={classes.topNavMov}>
			<div className={classes.logo}>{logo}</div>

			<div className={classes.searchBarMov}>
				<span className={classes.searchIcon}>
					<SearchIcon />
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
				<div>
					<NavLink to="/about">ABOUT</NavLink>
				</div>
			</nav>

			<div onClick={onShowNominated} className={classes.mob}>
				<div style={{ position: "relative", width: "3rem", height: "3rem" }}>
					<div className={classes.fave}>{props.nominatedMovies.length}</div>
					<div className={classes.star}>
						<MobileListIcon />
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div id={"total"} className={classes.total}>
			<div onClick={onCloseSocials} className={classes.majorComp}>
				<div id="overlay" className={classes.overlay}></div>

				<header className={classes.header}>
					<div className={classes.topNav}>
						<HeaderNav />
						<div className={classes.mob}>
							<div onClick={onShowNominated} style={{ position: "relative" }}>
								<div className={classes.fave}>
									{props.nominatedMovies.length}
								</div>
								<div className={classes.star}>
									<MobileListIcon />
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
							<div ref={searchBarRef} id="iq" className={classes.searchBar}>
								<span className={classes.searchIcon}>
									<SearchIcon />
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
								<span>{num}</span> Results for:
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
							<Ok />
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
		results: state.searchResults.moviesResult,
		nominatedMovies: state.nominatedMovies.nominatedMovies,
		nominationComplete: state.nominatedMovies.nominationComplete,
		totalMoviesNumber: state.searchResults.moviesTotal,
		// reduxNoResult: state.searchResults.noResult,
		reduxLoader: state.searchResults.reduxLoader,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMoreMovies: (title, page) =>
			dispatch(actions.fetchMoreMovies(title, page)),
		fetchFirstMovies: (title, page) =>
			dispatch(actions.fetchMoreMovies(title, page)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
