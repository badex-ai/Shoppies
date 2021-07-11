import React from "react";

function CancelIcon(props) {
  return (
    <svg id="Remove_Icon" data-name="Remove Icon" xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 32 32">
       {/* <rect id="Rectangle_44" data-name="Rectangle 44" width="20" height="20" fill="none"/> */}
       <g id="Group_50" data-name="Group 50">
           <line id="Line_2" data-name="Line 2" x1="12" y2="12" transform="translate(10 10)" fill="none" stroke={props.color} strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
           <line id="Line_3" data-name="Line 3" x1="12" y1="12" transform="translate(10 10)" fill="none" stroke={props.color} strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
       </g>
       </svg>
  );
}

export default CancelIcon;
