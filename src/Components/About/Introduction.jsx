import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";


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
                <span className="different">HARSHITH S </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Coimbatore, Tamilnadu (India)
                </span>
                . I am currently pursuing Msc (Software systems)
                In{" "}
                <span className="different">
                  COIMBATORE INSTITUTE OF TECHNOLOGY(Tamilnadu)
                </span>
                . I have completed my six months internhsip at{" "}
                <span className="different">Smartail pvt ltd</span> Chennai as a Product Engineer
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Leadership{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Responsibility{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Football{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Management{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
