import React from "react";
import NewsComponent from "./NewsComponent";
import "./News.css";
import Footer from "../../Footer.js";

function News() {
  return (
    <div className="news">
      <h1 className="news_title">연구실 성과</h1>
      <div>
        <div className="news_container">
          <div className="news_wrapper">
            <ul className="news_items">
              <NewsComponent
                src="images/achieves/conference1.jpg"
                text="2024 한국통신학회"
                label="2024"
                path="achievements/0" //id
              />
              <NewsComponent
                src="images/achieves/conference2.jpg"
                text="2023 한국정보처리학회"
                label="2023"
                path="achievements/1"
              />
              <NewsComponent
                src="images/achieves/conference3.jpg"
                text="2023 한국통신학회"
                label="2023"
                path="achievements/2"
              />
              <NewsComponent
                src="images/achieves/내 손 안에 학습친구.jpg"
                text="2023 학술제 수상"
                label="2023"
                path="achievements/3"
              />
              <NewsComponent
                src="images/achieves/hackathon.jpg"
                text="2023 AI 해커톤 경진대회"
                label="2023"
                path="achievements/4"
              />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default News;
