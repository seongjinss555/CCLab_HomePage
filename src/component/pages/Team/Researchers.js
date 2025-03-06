import React, { useEffect } from "react";
import "./Researchers.css";
import Footer from "../../Footer.js";
function Researchers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /*페이지 이동 시 위로 고정*/

  return (
    <div>
      <h1 className="researchers">학부생 연구원</h1>
      <div className="researchers_container">
        <div className="container_wrap">
          <div className="researchers_info">
            <ul className="memberWrap">
              <br />
              <li className="memberList">
                <div className="listBox"></div>
                <div className="re_img">
                  <img src="images/member/researcher.jpg" />
                </div>
                <div className="re_about">
                  <div className="name">
                    <p className="eng">Sungjin An</p>
                    <p className="kor">안성진</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 4학년</li>
                    <li className="projects">주요 관심분야: 프론트엔드 개발</li>
                    <li className="paper">
                      논문 : 장애인을 위한 일반 주차장 도움 보조 시스템
                    </li>
                  </div>
                </div>
              </li>
              <hr />
              <br />
              <li className="memberList">
                <div className="listBox"></div>
                <div className="re_img">
                  <img src="images/member/researcher2.jpg" />
                </div>
                <div className="re_about">
                  <div className="name">
                    <p className="eng">Minkyung Shim</p>
                    <p className="kor">심민경</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 4학년</li>
                    <li className="projects">주요 관심분야: 데이터 베이스</li>
                    <li className="paper">
                      논문 : 근전도 기반 재활을 위한 LED피드백 시스템에 관한
                      연구
                    </li>
                  </div>
                </div>
              </li>
              <hr />
              <br />
              <li className="memberList">
                <div className="listBox"></div>
                <div className="re_img">
                  <img src="images/member/researcher3.jpg" />
                </div>
                <div className="re_about">
                  <div className="name">
                    <p className="eng">Huiju Oh</p>
                    <p className="kor">오희주</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 4학년</li>
                    <li className="projects">주요 관심분야: 웹 개발</li>
                    <li className="paper">
                      논문 : 개인정보 보호를 위한 위치정보 마스킹 시스템
                    </li>
                  </div>
                </div>
              </li>
              <hr />
              <br />
              <li className="memberList">
                <div className="listBox"></div>
                <div className="re_img">
                  <img src="images/member/researcher4.jpg" />
                </div>
                <div className="re_about">
                  <div className="name">
                    <p className="eng">Seokhyeon Lee</p>
                    <p className="kor">이석현</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 3학년</li>
                    <li className="projects">
                      주요 관심분야: 백엔드 개발 & AI
                    </li>
                    <li className="paper"></li>
                  </div>
                </div>
              </li>
              <hr />
              <br />
              <li className="memberList">
                <div className="listBox"></div>
                <div className="re_img">
                  <img src="images/member/researcher5.jpg" />
                </div>
                <div className="re_about">
                  <div className="name">
                    <p className="eng">Jinhwan Kim</p>
                    <p className="kor">김진환</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 4학년</li>
                    <li className="projects">
                      주요 관심분야: 웹 개발 & 인공지능
                    </li>
                    <li className="paper">
                      논문 : 개인정보 보호를 위한 위치정보 마스킹 시스템
                    </li>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Researchers;
