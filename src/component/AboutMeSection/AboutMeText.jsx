import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="mb-10 text-6xl text-cyan">About Me</h2>
      <p className="text-white ">
        My name is Avazbek, I have been interested in programming since 2017 and
        currently <br />I am a frontend developer, I have been working with frontend
        for <br />2 years and now I have my own team and have done big projects with
        them.
      </p>
      <button className="flex items-center px-4 py-2 mt-10 text-lg text-white transition-all duration-500 border rounded-full cursor-pointer border-orange hover:bg-orange md:self-start sm:self-center hover:text-cyan ">My Project</button>
    </div>
  );
};

export default AboutMeText;
