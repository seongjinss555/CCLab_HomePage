import React from "react";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";

const TypewriterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 2px solid #fff;
  border-radius: 15px;
  width: 900px;
  margin: 20px 0;
  font-size: 38px;
  color: #fff;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 전체 화면을 차지 */
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
`;

const HomeTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #fff;
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
