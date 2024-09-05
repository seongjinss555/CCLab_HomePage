import React from "react";
import { Button } from "./Button";
import "./HomeSection.css";

function HomeSection() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          src="/index/index.jpg"
          alt="컴퓨터 네트워크 연구실"
          className="background-image"
        />
        <h1>컴퓨터 네트워크 연구실에 오신 걸 환영합니다!</h1>
        <Button />
      </div>
    </div>
  );
}

export default HomeSection;
