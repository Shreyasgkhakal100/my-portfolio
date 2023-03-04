import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_logo.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Aman Maddheshiya </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Gida, Gorakhpur (India)
                </span>
                . Currently persuing my B.tech 3rd year (Gorakhpur. Engineering)
                from{" "}
                <span className="different">
                  KIPM-COLLEGE OF ENGINEERING AND TECHNOLOGY (KIET)
                </span>
                .A self-taught programmer.Works in and{" "}
                <span className="different">Masai School</span> designing,entrepreneurship and an open-source contributor.
              </h4>
              <h4>Terms That describes me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Developer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Designer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Blogger{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
