import React from "react";
import classes from "./about.css";
import HeaderNav from "./header";
import MobileListIcon from "../components/icons/mobileList_icon";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { Link, useLocation } from "react-router-dom";

import { Link, useLocation } from "react-router-dom";
import GithubIcon from "../components/icons/GithubIcon";
import LInkedInIcon2 from "../components/icons/linkedIn2";

function about(props) {
	const location = useLocation();

	let classState;
	if (location.state == null || location.state.prevPath !== "/") {
		classState = classes.header_n;
	} else {
		classState = classes.header_m;
	}

	return (
		<React.Fragment>
			{/* <CSSTransition in={inProp} timeout={1000} classNames="head"> */}
			<header className={[classes.header, classState].join(" ")}>
				<div className={classes.topNav}>
					<HeaderNav />
					{/* <div className={classes.mob}> */}
					{/* <div onClick={onShowNominated} style={{ position: "relative" }}>
						<div className={classes.fave}>{props.nominatedMovies.length}</div>
						<div className={classes.star}>
							<MobileListIcon />
						</div>
					</div> */}
					{/* </div> */}
				</div>
			</header>
			{/* </CSSTransition> */}

			<section className={classes.sec}>
				<div className={classes.bx}>
					<h1>About</h1>
					<div className={classes.txt}>
						<p>
							Reflick is a movie sharing application that lets you send your
							favourite movies to people using your social media. It is a single
							page application built using omdb's movie api.
						</p>
					</div>
					<div className={classes.socials}>
						<a href="https://github.com/badex-ai/Shoppies" target="blank">
							<GithubIcon id={classes.hov} />
						</a>
						<a href="https://www.linkedin.com/in/badamasi-aliu/" target="blank">
							<LInkedInIcon2 id={classes.hov2} />
						</a>
					</div>
				</div>
			</section>
			<footer className={classes.foot}>
				<div>
					&copy;<span> Reflick,</span> <span>2022</span>
				</div>
			</footer>
		</React.Fragment>
	);
}

export default about;
