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
              <li className="memberList">
                <div className="listBox"></div>
                <div className="re_img">
                  <img src="images/member/researcher7.jpg" />
                </div>
                <div className="re_about">
                  <div className="name">
                    <p className="eng">Yunhyun Jo</p>
                    <p className="kor">조윤현</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 4학년</li>
                    <li className="projects">주요 관심분야: 스마트 헬스케어</li>
                    <li className="paper">
                      논문 : 수분탐지 센서 기반 심전도 센서 모니터링 시스템
                    </li>
                    <li className="paper2">
                      압력 센서 기반 좌식생활 모니터링 시스템
                    </li>
                    <li className="paper2">
                      기계학습을 이용한 ECG 및 PPG 신호 기반 다중 생체인식
                      시스템
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
                    <p className="eng">Hayoung Kim</p>
                    <p className="kor">김하영</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 4학년</li>
                    <li className="projects">주요 관심분야: IoT, 인공지능</li>
                    <li className="paper">
                      논문 : 다중 센서 기반 노인 활동 모니터링 시스템
                    </li>
                    <li className="paper2">
                      압력 센서 기반 발 매트를 이용한 노인 활동 모니터링 시스템
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
                    <p className="eng">Dabin Jang</p>
                    <p className="kor">장다빈</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 4학년</li>
                    <li className="projects">주요 관심분야: 웹 개발</li>
                    <li className="paper">
                      논문 : 청각장애인을 위한 소리감지 시스템
                    </li>
                  </div>
                </div>
              </li>
              <hr />
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
                    <li className="present">의료IT공학과 3학년</li>
                    <li className="projects">주요 관심분야: 웹 개발</li>
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
                    <p className="eng">Hyeonseok Sung</p>
                    <p className="kor">성현석</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 3학년</li>
                    <li className="projects">주요 관심분야: 웹 개발</li>
                    <li className="paper">
                      논문 : 서비스별 네트워크 프로토콜 유형 및 그 영향력 분석
                    </li>
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
                    <p className="eng">Minkyung Shim</p>
                    <p className="kor">심민경</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 3학년</li>
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
                  <img src="images/member/researcher6.jpg" />
                </div>
                <div className="re_about">
                  <div className="name">
                    <p className="eng">Huiju Oh</p>
                    <p className="kor">오희주</p>
                  </div>
                  <div className="details">
                    <li className="present">의료IT공학과 3학년</li>
                    <li className="projects">주요 관심분야: 웹 개발</li>
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
