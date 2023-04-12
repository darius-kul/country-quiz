import Image from "next/image";
import styled from "styled-components";
import { ContainerWrapper } from "../Container";
import Background from "@/public/images/background.png";
import { QuizCard } from "./QuizCard";
import { Option } from "./Option";

export const Quiz = () => {
  return (
    <SectionWrapper>
      <ImageWrapper>
        <Image src={Background} fill alt="quiz background" />
      </ImageWrapper>
      <StyledContainer>
        <QuizCard>
          <Option isCorrect option="Vietnam" variant="A" />
        </QuizCard>
      </StyledContainer>
    </SectionWrapper>
  );
};

const StyledContainer = styled(ContainerWrapper)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionWrapper = styled.section`
  position: relative;
  min-height: 100vh;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  img {
    object-fit: cover;
  }
`;
