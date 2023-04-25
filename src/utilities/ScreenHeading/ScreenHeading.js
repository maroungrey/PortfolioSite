import React from "react";
import "./ScreenHeading.css";

export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className="heading-separator">
        <div className="separator-line"></div>
      </div>
      <div className="screen-heading">
        <span>{props.title}</span>
      </div>
      <div className="heading-separator">
        <div className="separator-line"></div>
      </div>
      {props.subHeading ? (
        <div className="screen-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
