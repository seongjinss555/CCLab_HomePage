import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="info">
        <span className="about">
          <p className="about-head">담당교수</p>
          <em>김상대</em>
        </span>
        <span className="about">
          <p className="about-head">위치</p>
          <em>OFFICE: 의료과학관 5층 1511 LAB: 의료과학관 5층 1512</em>
        </span>
        <span className="about">
          <p className="about-head">About us</p>
          <em>
            <a href="https://home.sch.ac.kr/schmite/">의료IT공학과</a>
          </em>
        </span>
        <hr />
      </div>
      <span className="copyRight">© CCLab. All rights reserved</span>
    </div>
  );
}

export default Footer;
