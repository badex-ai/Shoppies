import React from "react";

function ScrollLoader() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="5rem"
			height="2rem"
			viewBox="-24 30 100 40"
		>
			<circle cx="6" cy="50" r="6" fill="#4c8077">
				<animate
					attributeName="opacity"
					begin="0.1"
					dur="1s"
					repeatCount="indefinite"
					values="0;1;0"
				></animate>
			</circle>
			<circle cx="26" cy="50" r="6" fill="#4c8077">
				<animate
					attributeName="opacity"
					begin="0.2"
					dur="1s"
					repeatCount="indefinite"
					values="0;1;0"
				></animate>
			</circle>
			<circle cx="46" cy="50" r="6" fill="#4c8077">
				<animate
					attributeName="opacity"
					begin="0.3"
					dur="1s"
					repeatCount="indefinite"
					values="0;1;0"
				></animate>
			</circle>
		</svg>
	);
}

export default ScrollLoader;
