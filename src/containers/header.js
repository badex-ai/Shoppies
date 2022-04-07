import React from "react";
import { NavLink } from "react-router-dom";
import Reflick from "../assets/SVG/reflick";
import classes from "./header.css";
function headerNav() {
	return (
		<React.Fragment>
			<div className={classes.logo}>
				<NavLink to="/">
					<Reflick />
				</NavLink>
			</div>
			<div className={classes.links}>
				<div>
					<NavLink to="/about">ABOUT</NavLink>
				</div>
			</div>
		</React.Fragment>
	);
}

export default headerNav;
