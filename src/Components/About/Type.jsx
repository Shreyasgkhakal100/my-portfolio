import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Full Stack Web Developer", "MERN Stack Developer", "Entrepreneure", "Chess Enthusiast", "YouTuber", "Poet"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
