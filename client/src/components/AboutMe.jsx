import React from "react";
import Header from "./Header"; // Assuming Header component is in the same directory
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <>
      <Header />
      <div className="aboutme-container">
        <h1>I am Mahesh Kumar Nayak,</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from Chatrapur, Odisha. I’m a
          software engineer deeply passionate about web development and
          problem-solving. My expertise lies in data structures, algorithms, and
          crafting efficient solutions to complex problems. I’ve gained
          significant experience freelancing on platforms like Upwork and
          Fiverr, where I’ve worked on a range of projects for diverse clients,
          always delivering high-quality results.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m driven by a strong foundation
          in computer science and an innate love for logical thinking. Whether
          it’s designing intuitive web interfaces or tackling the toughest
          algorithmic challenges, I approach each task with dedication and a
          focus on innovation.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continuous learning and
          self-improvement are at the core of my journey. As I strive to grow
          rapidly in my career, my goal is to make an irreplaceable impact in
          the tech industry, staying ahead of the curve with every project I
          take on.
        </p>
      </div>
      <footer>
        <p>MERN Stack Weather App</p>
        <p>&copy; 2024 Maphy, Inc</p>
      </footer>
    </>
  );
};

export default AboutMe;
