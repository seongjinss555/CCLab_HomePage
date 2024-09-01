import React, { useState } from "react";
import "./Professor.css";

function Professor() {
  const [activeTab, setActiveTab] = useState("소개");
  return (
    <div className="summary">
      <ul className="pf_about">
        <li className={activeTab === "소개" ? "active" : ""}>
          <button type="button" onClick={() => setActiveTab("소개")}>
            소개
          </button>
        </li>
        <li className={activeTab === "저서/논문" ? "active" : ""}>
          <button type="button" onClick={() => setActiveTab("저서/논문")}>
            저서/논문
          </button>
        </li>
        <li className={activeTab === "수상" ? "active" : ""}>
          <button type="button" onClick={() => setActiveTab("수상")}>
            수상
          </button>
        </li>
      </ul>

      {/* 소개 탭 내용 */}
      {activeTab === "소개" && (
        <div className={`about type1 active`}>
          <div className="box">
            <h4 className="title">관심 분야</h4>
            <hr />
            <dt className="bullet">
              <li>무선 센서 네트워크(Wireless Sensor Network)</li>
              <li>
                산업용 무선 센서 네트워크(Industrial Wireless Sensor Network){" "}
              </li>
              <li>사물 인터넷(Internet of Things)</li>
              <li>기계 학습(Machine Learning)</li>
            </dt>
            <h4 className="title">수업 목록</h4>
            <hr />
            <dt className="bullet">
              <li>자료구조(2)</li>
              <li>자료구조 실습(2)</li>
              <li>알고리즘(3)</li>
              <li>컴퓨터 네트워크(3)</li>
              <li>모바일 프로그래밍(3)</li>
              <li>웹 프로그래밍(3)</li>
              <li>고급 웹 프로그래밍(4)</li>
            </dt>
            <h4 className="title">학력</h4>
            <hr />
            <dt className="bullet">
              <li>충남대학교 공학사 (2013)</li>
              <li>충남대학교 공학박사 (2019)</li>
            </dt>
            <h4 className="title">경력</h4>
            <hr />
            <dt className="bullet">
              <li>충남대학교 소프트웨어 연구소 Post Doctor</li>
              <li>공주대학교 스마트 기술 연구소 Post Doctor 및 연구 교수</li>
              <li>순천향대학교 의료IT공학과 교수 부임</li>
            </dt>
          </div>
        </div>
      )}

      {/* 저서/논문 탭 내용 */}
      {activeTab === "저서/논문" && (
        <div className={`about type2 active`}>
          <div className="box">
            <h4 className="title">논문 목록</h4>
            <hr />
            <div className="papers">
              <li>
                Cluster-Disjoint Multipath Routing Protocol for Real-Time and
                Reliable Packet Transmission in Wireless Sensor Networks (2023)
              </li>
              <br></br>
              <li>
                High-Efficiency Resource Allocation Scheme Introducing the
                Concept of Resource Sharing Paths in Industrial IoT (2023)
              </li>
              <br></br>
              <li>
                Cost-Efficient and Reliable Communication Scheme for Supporting
                a Mobile Device in WirelessHART of IIoT (2022)
              </li>
              <br></br>
              <li>
                K-means Clustering-Based Safety System in Large-Scale Industrial
                Site Using Industrial Wireless Sensor Networks(2022)
              </li>
              <br></br>
              <li>
                Energy-efficient and Reliable Face Routing Scheme in Wireless
                Networks (2021)
              </li>
              <br></br>
              <li>
                Survey on Communication for Mobile Sinks in Wireless Sensor
                Networks: Mobility Pattern Perspective, Journal of Internet
                Technology, 22 (2021)
              </li>
              <br></br>
              <li>
                A Hierarchical Routing Graph for Supporting Mobile Devices in
                Industrial Wireless Sensor Networks, MDPI Sensors, 21 (2021)
              </li>
              <br></br>
              <li>
                Cooperative Multipath Routing with Path Bridging in Wireless
                Sensor Network toward IoTs Service, Ad Hoc Networks, 106 (2020)
              </li>
              <br></br>
              <li>
                Agent-based Multipath Management for Supporting Sink Mobility in
                Wireless Sensor Networks, Wireless Communications and Mobile
                Computing, 2020 (2020)
              </li>
              <br></br>
              <li>
                Radio-disjoint Multipath Routing with Dynamic Guard-band
                Shifting in Wireless Sensor Networks, Journal of Internet
                Technology, 21 (2020)
              </li>
              <br></br>
              <li>
                An Energy Efficient Sink Location Service for Continuous Objects
                in Wireless Sensor Networks, MDPI Sensors, 20 (2020)
              </li>
              <br></br>
              <li>
                Radio-disjoint Multipath Routing with Dynamic Guard-band
                Shifting in Wireless Sensor Networks, MDPI Appl. Sci., 20 (2020)
              </li>
              <br></br>
              <li>
                Adaptive Flow Control using Movement Information in
                Mobile-Assisted Sensor Data Collection, IEEE Sensors, 20 (2020)
              </li>
              <br></br>
              <li>
                Radio-disjoint Multipath Routing with Dynamic Guard-band
                Shifting in Wireless Sensor Networks, Journal of Internet
                Technology, 21 (2020)
              </li>
              <br></br>
              <li>
                Opportunistic Multipath Routing in Long-hop Wireless Sensor
                Networks, MDPI Sensors, 19 (2019)
              </li>
            </div>
          </div>
        </div>
      )}

      {/* 수상 탭 내용 */}
      {activeTab === "수상" && (
        <div className={`about type3 active`}>
          <div className="box">
            <h4 className="title">수상 목록</h4>
            <hr />
            <div className="awards">
              <li>IES Student & YP Paper Assistance (2019)</li>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Professor;
