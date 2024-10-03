import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";

const TypewriterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 2px solid #000;
  border-radius: 15px;
  background-color: #fff;
  width: 900px;
  margin: 20px 0;
  font-size: 38px;
`;

const HomeContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 전체 화면을 차지 */
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
`;

const HomeTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

function HomeSection() {
  return (
    <HomeContainer>
      <HomeTitle>CCLab.</HomeTitle>
      <TypewriterBox>
        <TypewriterComponent
          options={{
            strings: ["Welcome to CCLab!"],
            autoStart: true,
            loop: true,
            delay: 65,
          }}
        />
      </TypewriterBox>
    </HomeContainer>
  );
}

export default HomeSection;
