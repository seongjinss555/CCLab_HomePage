import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailBox = styled.div`
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  text-align: left;
`;

const DetailImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const DetailImg = styled.img`
  width: 100%;
  max-width: 450px;
  margin-bottom: 10px;
  height: auto;
  border-radius: 8px;
`;

const DetailTitle = styled.h1`
  font-family: "goorm-sans-bold";
  text-align: center;
  font-size: 35px;
  margin: 10px 0;
`;

const DetailList = styled.ol`
  font-family: "goorm-sans-bold";
  text-align: left;
  color: #333;
  padding-left: 20px;
  padding-top: 5px;
`;
const DetailListContainer = styled.div`
  border: 1px solid #ddd;
  background-color: white;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  border-radius: 8px;
`;
const DetailListItem = styled.li`
  margin-bottom: 5px;
`;

function Details() {
  const { id } = useParams(); // 경로에서 ID를 가져옴
  console.log("id:", id);
  const detailData = [
    {
      title: "2024 제주도 하계 한국통신학회 참가",
      body: [
        "기계학습을 이용한 ECG 및 PPG 신호 기반 다중 생체인식 시스템(조윤현, 김상대)",
        "다중 센서 기반 노인 활동 모니터링 시스템(김하영, 김상대)",
        "긴급상황을 위한 음성인식을 통한 빠른 신고 시스템(임시훈, 김상대)",
        "청각장애인을 위한 소리감지 시스템(장다빈, 김상대)",
        "장애인을 위한 일반 주차장 도움 보조 시스템(안성진, 김상대)",
        "서비스별 네트워크 프로토콜 유형 및 그 영향력 분석(성현석, 김상대)",
        "개인정보 보호를 위한 위치정보 마스킹 시스템(오희주, 김상대)",
        "근전도 기반 근육 재활을 위한 LED 피드백 시스템에 관한 연구(심민경, 김상대)",
      ],
      src: [
        "/images/achieves/conference1.jpg",
        "/images/papers/presentation2.jpg",
      ],
    },
    {
      title: "2023 추계 한국정보처리 학회 참가",
      body: [
        " 운동강도 인지를 위한 근피로도 측정 매개변수의 기초 연구 (임시훈, 장다빈, 최원빈, 김상대)",
        "청각장애 부모를 위한 아기 울음소리감지 시스템 (장다빈, 임시훈, 최원빈, 김상대)",
        "압력 센서 기반 좌식생활 모니터링 시스템 (조윤현, 김하영, 김상대)",
        "강수량 기반 지하터널 진입 위험도 판단 시스템 (최원빈, 임시훈, 장다빈, 김상대)",
      ],
      src: [
        "/images/achieves/conference2.jpg",
        "/images/achieves/conference4.jpg",
      ],
    },
    {
      title: "2023 하계 한국통신 학회 참가",
      body: [
        "압력 센서 기반 발 매트를 이용한 노인 활동 모니터링 시스템 (김하영, 조윤현, 김상대)",
        "수분탐지 센서 기반 심전도 모니터링 시스템 (조윤현, 김하영, 김상대)",
      ],
      src: ["/images/achieves/conference3.jpg"],
    },
    {
      title: "2023 의료IT공학과 학술제 수상",
      body: [
        "대상(임시훈, 최원빈)",
        "우수상(김하영, 장다빈)",
        "장려상(조윤현)",
      ],
      src: [
        "/images/achieves/내 손 안에 학습친구.jpg",
        "/images/achieves/스쿨버스 예약 애플리케이션.jpg",
        "/images/achieves/스쿨버스 예약 애플리케이션 2.jpg",
        "/images/achieves/압력 센서 기반 좌식생활 모니터링 시스템.jpg",
      ],
    },
    {
      title: "2023 AI 해커톤 경진대회",
      body: [
        "2023년도 제 3회 캡스톤 디자인 및 AI 해커톤 경진대회에서 최우수상(조윤현)을 다음과 같이 수상하였습니다.",
      ],
      src: ["/images/achieves/hackathon.jpg"],
    },
  ];

  const detail = detailData[parseInt(id)];

  return detail ? (
    <DetailBox>
      <hr />
      <DetailTitle>{detail.title}</DetailTitle>
      <hr />
      <DetailImgContainer>
        {Array.isArray(detail.src) ? (
          detail.src.map((image, index) => (
            <DetailImg
              key={index}
              src={image}
              alt={`${detail.title}  ${index + 1}`}
            />
          ))
        ) : (
          <DetailImg src={detail.src} alt={detail.title} />
        )}
      </DetailImgContainer>
      <DetailListContainer>
        <DetailList>
          {detail.body.map((item, index) => (
            <DetailListItem key={index}>{item}</DetailListItem>
          ))}
        </DetailList>
      </DetailListContainer>
    </DetailBox>
  ) : (
    <p>세부 정보를 찾을 수 없습니다.</p>
  );
}

export default Details;
