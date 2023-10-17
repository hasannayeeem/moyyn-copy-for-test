import React from "react";
import styled from "styled-components";
import { PrimaryBtn } from "../Common/PrimaryBtn.stc";
import { SecondaryBtn } from "../Common/SecondaryBtn.stc";
import { Container } from "../Common/Container.stc";
import { ButtonWrapper } from "../moyyn-sections/AtAGlanceSection";

const Section = styled.section`
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 0 0;
`;

const TextColumn = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const VideoColumn = styled.div`
  flex: 1;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 25px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 25px;
`;

const Video = styled.video`
  max-width: 100%;
  height: auto;
`;
const Image = styled.img`
  max-width: 100%;
`;

const HeroSection = () => {
  return (
    <Section>
      <Container width={`1140px`}>
        <Row>
          <TextColumn>
            <Heading>
              Your next-gen hiring solution: <u>free</u> and scalable
            </Heading>
            <Description>
              Use the power of our sourcing engine and get access to millions of
              profiles, free multiposting, and our active talent pool – all in
              one!
            </Description>
            <div>
            <ButtonWrapper align='left'>
          <PrimaryBtn href="https://client.moyyn.com/">
          Get candidates for free
          </PrimaryBtn>
        </ButtonWrapper>
        <ButtonWrapper align='left'>
          <SecondaryBtn href="https://calendly.com/book-quirin/30min?month=2023-03">
          gate programs for talents
          </SecondaryBtn>
        </ButtonWrapper>
            </div>
            <Image width={`269px`} height={`151px`}
            src={`https://moyyn.com/wp-content/uploads/2021/03/Three-Frame-Tea-Set-Photo-Facebook-Cover-1.png`} alt="" 
            />
          </TextColumn>
          <VideoColumn>
            <Video
              src="https://moyyn.com/wp-content/uploads/2023/01/The-next-generation-job-platform-is-Modern.-Cost-effective.-AI.-Introducing-Moyyn-11.mp4"
              autoPlay
              loop
              muted
            />
          </VideoColumn>
        </Row>
      </Container>
    </Section>
  );
};

export default HeroSection;
