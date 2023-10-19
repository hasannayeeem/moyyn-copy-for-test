import React from "react";
import { Container } from "../Common/Container.stc";
import { PrimaryBtn } from "../Common/PrimaryBtn.stc";
import { SecondaryBtn } from "../Common/SecondaryBtn.stc";
import { moyynItems } from "../../fakeData";
import { ButtonWrapper, Section } from "../Common/index";
import { Heading, Row, ImageColumn, Image, ContentColumn, ImageBoxTitle, ImageBoxDescription,  } from "../Common/atAGlanceMoyynStc";

const AtAGlanceSection = () => {
  return (
    <Section padding={`0`}>
      <Container>
        <Heading>Moyyn at a glance</Heading>
        {moyynItems.map((item, index) => (
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
