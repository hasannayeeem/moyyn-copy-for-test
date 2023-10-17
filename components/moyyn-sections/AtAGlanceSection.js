import React from "react";
import styled from "styled-components";
import { Container } from "../Common/Container.stc";
import { PrimaryBtn } from "../Common/PrimaryBtn.stc";
import { SecondaryBtn } from "../Common/SecondaryBtn.stc";

const items = [
  {
    title: "Start for free and build attractive job ads",
    description:
      "Get free multiposting on more than 10+ job platforms in Germany and Europe. Leverage your subscription and get free multiposting in 30+ platforms, a custom career site, and unlimited access to our highly skilled Talent Pool of more than 31000 engineers and managers, from mid-senior to expert level!",
    imageUrl:
      "https://moyyn.com/wp-content/uploads/2023/01/The-next-generation-job-platform-is-Modern.-Cost-effective.-AI.-Introducing-Moyyn-14.png",
  },
  {
    title: "Get AI-matched candidates in seconds",
    description:
      "As soon as your job is published, our AI matches it with our talent pool and suggests you the best candidates within seconds. Pro-actively source candidates instead of waiting until they apply.",
    imageUrl:
      "https://moyyn.com/wp-content/uploads/2023/01/The-next-generation-job-platform-is-Modern.-Cost-effective.-AI.-Introducing-Moyyn-13.png",
  },
  {
    title: "Centralized access to 800 Million+ profiles",
    description:
      "Access almost 1 Billion candidates from all professional networks in one platform, naturally GDPR compliant. Reach out to the best candidates proactively and don’t wait for talents to apply. As more and more recruiters actively reach out to the talent you can become the first without having redundant subscriptions on multiple time consuming platforms.",
    imageUrl:
      "https://moyyn.com/wp-content/uploads/2023/01/The-next-generation-job-platform-is-Modern.-Cost-effective.-AI.-Introducing-Moyyn-18.png",
  },
  {
    title: "Scale your HR team with recruiter on-demand",
    description:
      "Whether you need support in pre-selection, active sourcing, interviews, or managing candidates, especially for tough-to-fill positions, our on-demand services are here to support you.",
    imageUrl:
      "https://moyyn.com/wp-content/uploads/2023/01/The-next-generation-job-platform-is-Modern.-Cost-effective.-AI.-Introducing-Moyyn-16.png",
  },
  {
    title: "Manage candidates easily",
    description:
      "Our easy-to-use platform is built especially for founders, hiring managers, and recruiters, with the core value of ease of use. Evaluate candidates easily and manage the hiring funnel effortlessly.",
    imageUrl:
      "https://moyyn.com/wp-content/uploads/2023/01/The-next-generation-job-platform-is-Modern.-Cost-effective.-AI.-Introducing-Moyyn-17.png",
  },
];

const Section = styled.section`
  width: 1440px;
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 0px;
`;
const ContentColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageColumn = styled.div`
  margin-right: 10px;
  width: 50%;
  display: inline-block;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
  transition-duration: 0.3s;
`;

const ImageBoxTitle = styled.span`
  font-weight: bold;
  color: #000000;
  font-family: "Poppins", Sans-serif;
  font-size: 25px;
  line-height: 25px;
`;

const ImageBoxDescription = styled.p`
  font-family: "Poppins", Sans-serif;
  font-size: 14px;
  line-height: 26px;
  color: #7a7a7a;
  font-weight: 400;
`;
const Heading = styled.h1`
  color: #000000;
  font-family: "Pacifico", Sans-serif;
  font-size: 35px;
  line-height: 53px;
  letter-spacing: 0.1px;
  text-align: center;
  margin-bottom: 20px;
`;
export const ButtonWrapper = styled.div`
width: 100%;
text-align: ${({ align }) => align || "center"};;
margin-bottom: 20px;
`;

const AtAGlanceSection = () => {
  return (
    <Section>
      <Container>
        <Heading>Moyyn at a glance</Heading>
        {items.map((item, index) => (
          <Row>
            <ImageColumn>
              <Image src={item.imageUrl} alt="" />
            </ImageColumn>
            <ContentColumn>
              <ImageBoxTitle>{item.title}</ImageBoxTitle>
              <ImageBoxDescription>{item.description}</ImageBoxDescription>
            </ContentColumn>
          </Row>
        ))}
        <ButtonWrapper>
          <PrimaryBtn href="https://client.moyyn.com/">
            Signup for free
          </PrimaryBtn>
        </ButtonWrapper>
        <ButtonWrapper>
          <SecondaryBtn href="https://calendly.com/book-quirin/30min?month=2023-03">
            Book a demo
          </SecondaryBtn>
        </ButtonWrapper>
      </Container>
    </Section>
  );
};

export default AtAGlanceSection;
