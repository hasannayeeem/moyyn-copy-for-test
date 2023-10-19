import React from "react";
import { PrimaryBtn } from "../Common/PrimaryBtn.stc";
import { SecondaryBtn } from "../Common/SecondaryBtn.stc";
import { Container } from "../Common/Container.stc";
import { ButtonWrapper, Section } from "../Common/index";
import { Description, Heading, Image, Row, TextColumn, Video, VideoColumn } from "../Common/heroStc";


const HeroSection = () => {
  return (
    <Section align={`left`} padding={`100px 0 10px 0`}>
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
