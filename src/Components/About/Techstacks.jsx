import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaAngular, FaGitlab } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiSpringboot,
  SiD3Dotjs,
  SiPostman,
  SiMysql
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku, SiJava } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

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
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <FaDocker />
            <h5>Docker</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiJava />
            <h5>Java</h5>
          </div>

          <div>
            <SiSpringboot />
            <h5>Spring boot</h5>
          </div>

          <div>
            <SiD3Dotjs />
            <h5>D3 JS</h5>
          </div>
          <div>
            <SiPostman />
            <h5>PostMan</h5>
          </div>
          <div>
            <FaAngular />
            <h5>Angular</h5>
          </div>
          <div>
            <FaGitlab />
            <h5>Git lab</h5>
          </div>
          <div>
            <SiMysql />
            <h5>SQL</h5>
          </div>

          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <BsWordpress />
            <h5>D3 JS</h5>
          </div>
          <div>
            <SiHeroku />
            <h5>Heroku</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
