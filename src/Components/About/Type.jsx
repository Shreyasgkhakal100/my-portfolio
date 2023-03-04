import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Full Stack Web Developer","Content Creator","Designer" , "Entrepreneur", "Otaku", "YouTuber"],
          autoStart: true,
          loop: true,
          deleteSpeed: 40
        }}
      />
    </>
  );
};
