import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h6 className="footer">
            In the world of technology, innovation is my compass.
            </h6>
          </div>
        </a>
      </div>
    </>
  );
};
