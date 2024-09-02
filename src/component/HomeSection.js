import React from "react";
import { Button } from "./Button";
import "./HomeSection.css";

function HomeSection() {
  return (
    <div className="home-container">
      <video src="/videos/video1.mp4" type="video/mp4" autoPlay loop muted />
      <h1>컴퓨터 네트워크 연구실에 오신 걸 환영합니다!</h1>
      <Button />
    </div>
  );
}

export default HomeSection;
