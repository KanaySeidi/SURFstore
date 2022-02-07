import React from "react";
import waves from "../videos/main-video.mp4";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <video className="main-video" autoPlay loop muted>
        <source src={waves} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
