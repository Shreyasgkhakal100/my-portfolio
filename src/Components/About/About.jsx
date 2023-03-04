import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
// import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks} from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hey, I am <span className="about__name">Aman Maddheshiya</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Frontend Developer who is upgrading himself into a Full Stack Developer from past 3 months. Worked with few startups and on projects to increase my productivity & efficiency further.In past 6 months,successfully delivered 8+ projects including major and minor.
          15+ projects till now.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/inbuilt-aura"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:developeramanyt@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+91-9792118754"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-maddheshiya-b437581b1/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"s
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/aman_aura"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1Vp-6p_mYtcJW26FvRbIZOpvoR9DBH48M/view?usp=share_link"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
