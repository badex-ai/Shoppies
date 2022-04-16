import React from "react";
import classes from "./textLoader.css";

function textLoader() {
	return (
		<React.Fragment>
			<div className={classes.dotbox}>
				<div className={classes.dot}></div>
				<div className={classes.dot}></div>
				<div className={classes.dot}></div>
			</div>
		</React.Fragment>
	);
}

export default textLoader;
