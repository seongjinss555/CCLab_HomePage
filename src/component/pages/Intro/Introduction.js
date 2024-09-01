import React from "react";
import "./Introduction.css";
import PaperComponent from "./PaperComponent.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Footer.js";

export default function Introduction() {
  //슬라이더 설정
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  //화면 넘기는 화살표
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        &#10094;
      </div>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        &#10095;
      </div>
    );
  }

  return (
    <div className="introduction">
      <h1 className="title">연구실 소개</h1>
      <div className="intro_container">
        <div className="intro_contents">
          <dl className="int_main">
            <dt className="int_top">
              <span class="lab_header">
                CCLab.
                <em> 연구분야</em>
              </span>
            </dt>
            <dd className="int_bottom">
              <p className="main_desc">
                "1. 의료 통신 네트워크"
                <br></br>
                "2. 에너지 효율성을 극대화 시키는 프로토콜 연구"
                <br></br>
                "3. 저지연, 고신뢰 전송을 위한 라우팅 프로토콜 연구"
              </p>
            </dd>
          </dl>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="intro_container">
        <div className="intro_contents">
          <dl className="int_main">
            <dt className="int_top">
              <span class="lab_header">
                CCLab.
                <em> 연구실 목표</em>
              </span>
            </dt>
            <dd className="int_bottom">
              <p className="main_desc">
                "1. 우리 학과의 학부 교육과정에 기반한 새로운 연구주제 모색"
                <br></br>
                <br></br>
                "2. 의료 분야에서의 네트워크 기술에 대한 연구를 고려"
                <dd>- 학부연구생과 함께 다양한 주제에 대해서 연구</dd>
                <br></br>
                "3. 연구논문 작성"
              </p>
            </dd>
          </dl>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="intro_container">
        <div className="intro_contents">
          <dl className="int_main">
            <dt className="int_top">
              <span class="lab_header">
                CCLab.
                <em> 연구실 활동</em>
              </span>
            </dt>
            <dd className="int_bottom">
              <p className="main_desc">
                Q1: 학부연구생 활동은 어떤게 있을까요?
              </p>
              <li className="paper_proc">A : </li>
              <li className="paper_proc">연구논문 작성 과정을 경험하며</li>
              <li className="paper_proc">
                논문을 작성하는 일련의 과정에 대해 경험해보는 것을 목표로 하고
                있습니다.
              </li>
              <li className="paper_proc">
                또한, 학술대회 이상 논문을 1편 이상 발표하는 것을 목표로 하고
                있으며
              </li>
              <li className="paper_proc">
                연구논문 검증을 위한 실험 도구의 경험을 목표로 하고 있습니다.
              </li>
              <li className="paper_proc">
                마지막으로 통신과 관련된 다양한 기초 도구를 사용해보는 것을
                목표로 하고 있습니다.
              </li>
              <p className="main_desc">
                Q2: 논문 작성의 프로세스는 어떻게 진행되죠?
              </p>
              <li className="paper_proc">A : </li>
              <li className="paper_proc">논문을 읽고</li>
              <li className="paper_proc">논문을 분석해서 문제점을 찾고</li>
              <li className="paper_proc">
                그 문제를 해결하기 위한 아이디어를 찾는 과정입니다.
              </li>
            </dd>
          </dl>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="intro_container">
        <div className="intro_contents">
          <div className="paper_ex">
            <dl className="int_main">
              <dt className="int_top">
                <span class="lab_header">
                  CCLab.
                  <em> 논문 검증 및 발표</em>
                </span>
              </dt>
              <Slider {...settings}>
                <div className="paper_ex">
                  <PaperComponent
                    src="images/papers/arduino.jpg"
                    text="테스트 보드"
                  />
                </div>
                <div className="paper_ex">
                  <PaperComponent
                    src="images/papers/simulation.jpg"
                    text="컴퓨터 시뮬레이션"
                  />
                </div>
                <div className="paper_ex">
                  <PaperComponent
                    src="images/papers/presentation1.jpg"
                    text="논문 발표"
                  />
                </div>
                <div className="paper_ex">
                  <PaperComponent
                    src="images/papers/presentation2.jpg"
                    text="논문 발표"
                  />
                </div>
              </Slider>
            </dl>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
