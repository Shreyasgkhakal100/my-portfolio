import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs,FaGitAlt} from "react-icons/fa";
import {
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
           <div>
            <SiJavascript />
             <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML5</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS3</h5>
          </div>
          <div>
            <FaReact />
            <h5>React.js</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>
          
          <div>
            <FaGitAlt />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
