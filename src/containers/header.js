import { NavLink, useLocation } from "react-router-dom";
import React from "react";
// import { withRouter } from "react-router";
import Reflick from "../assets/SVG/reflick";
import classes from "./header.css";
function headerNav() {
	return (
		<React.Fragment>
			<div className={classes.logo}>
				<NavLink to={"/"} state={{ prevPath: location.pathname }}>
					<Reflick />
				</NavLink>
			</div>
			<div className={classes.links}>
				<div>
					<NavLink
						// exact
						className={({ isActive }) =>
							isActive ? classes.activeLink : classes.no
						}
						to={"/about"}
						state={{ prevPath: location.pathname }}
					>
						ABOUT
					</NavLink>
				</div>
			</div>
		</React.Fragment>
	);
}

export default headerNav;
// export default withRouter(headerNav);
