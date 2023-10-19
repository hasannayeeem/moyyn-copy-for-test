import React, { useState } from "react";
import { Container } from "../Common/Container.stc";
import { ButtonWrapper } from "../Common";
import { PrimaryBtn } from "../Common/PrimaryBtn.stc";
import { SecondaryBtn } from "../Common/SecondaryBtn.stc";
import { faqItems } from "../../fakeData";
import { Section } from "../Common";
import { ContentColumn, Heading, Image, ImageColumn, Row, ToggleContent, ToggleIcon, ToggleItem, ToggleTitle } from "../Common/faqStc";

function FAQSection() {
  const [openItems, setOpenItems] = useState(
    Array(faqItems.length).fill(false)
  );

  const toggleItem = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <Section>
      <Container width={`1140px`} padding={`10px`}>
        <Row>
          <ImageColumn>
            <Image
              src="https://moyyn.com/wp-content/uploads/2023/01/The-next-generation-job-platform-is-Modern.-Cost-effective.-AI.-Introducing-Moyyn-19-1024x576.png"
              alt="Moyyn"
            />
          </ImageColumn>
          <ContentColumn>
            <Heading>Questions?</Heading>
            {faqItems.map((item, index) => (
              <ToggleItem key={index}>
                <ToggleTitle onClick={() => toggleItem(index)} isOpen={openItems[index]}>
                  {item.question}
                  <ToggleIcon>{item.tag}</ToggleIcon>
                  <ToggleContent isOpen={openItems[index]}>
                    {item.answer}
                  </ToggleContent>
                </ToggleTitle>
              </ToggleItem>
            ))}
            <ButtonWrapper align={`left`}>
              <PrimaryBtn href="https://client.moyyn.com/">
                Signup for free
              </PrimaryBtn>
            </ButtonWrapper>
            <ButtonWrapper align={`left`}>
              <SecondaryBtn href="https://calendly.com/book-quirin/30min?month=2023-03">
                Book a demo
              </SecondaryBtn>
            </ButtonWrapper>
          </ContentColumn>
        </Row>
      </Container>
    </Section>
  );
}

export default FAQSection;