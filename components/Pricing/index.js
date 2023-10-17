import React from "react";
import styled from "styled-components";
import { Container } from "../Common/Container.stc";
import { ButtonWrapper } from "../moyyn-sections/AtAGlanceSection";
import { SecondaryBtn } from "../Common/SecondaryBtn.stc";
import { PrimaryBtn } from "../Common/PrimaryBtn.stc";

const Section = styled.section`
  width: 1440px;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
`;

const PricingSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const PricingCard = styled.div`
  width: ${({ width }) => width};
  width: ${({ width }) => console.log(width)};
`;

const PricingTable = styled.div`
  background: #6EB6FF;
  box-shadow: 0px 30px 65px 0px rgba(76, 88, 227, 0.4);
  padding: 30px 0;
  text-align: center;
  border-radius: 30px;
  width: ${({ width }) => console.log(width)};
`;

const Price = styled.span`
  font-size: 45px;
  font-weight: bold;
  color: #6EB6FF;
  padding: 42px 0;
  display: block;
  background: #fff;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 30px 0 30px 40px;
  text-align: left;
  color: #fff;
`;

const FeatureItem = styled.li`
  margin: 10px 0;
`;

const Description = styled.div`
  padding: 20px;
  text-align: center;
  margin: 20px 0;
`;
const Heading = styled.h2`
  font-size: 36px;
  color: #000;
  margin-bottom: 30px;
  text-align: center;
`;
const Button = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  margin: 10px;
`;

// Define your pricing plans as an array of objects
const pricingPlans = [
  {
    price: "free",
    width: "286px",
    features: [
      "Free multiposting in 10+ platforms",
      "Pipeline management",
      "Dedicated recruiter on-demand",
    ],
  },
  {
    price: "subscribe",
    width: "335px",
    features: [
      "Free multiposting in 30+ platforms",
      "Access to talent pool of 31,000+ candidates",
      "50 credits for active sourcing AI",
      "AI-based matchmaking of candidates",
      "Pipeline management",
      "Recruiter on-demand/hourly basis",
    ],
  },
  {
    price: "pay per hire",
    width: "355px",
    features: [
      "Pay only after successful hire",
      "Dedicated Recruiter",
      "Active sourcing on 5+ platforms",
      "Free Multiposting in 30+ platforms",
      "AI-based matchmaking of candidates",
      "Unlimited access to talent pool",
      "Unlimited job postings",
    ],
  },
];

function PricingComponent() {
  return (
    <Section>
      <Container width={`1012px`}>
        <Heading>Pricing</Heading>
        <PricingSection>
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} width={plan.width}>
              <PricingTable>
                <Price>{plan.price}</Price>
                <FeatureList>
                  {plan.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
              </PricingTable>
            </PricingCard>
          ))}
        </PricingSection>

        <Description>
          <p>
            Connect with us and avail discounted pricing if you are a young
            startup
          </p>
        </Description>
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
}

export default PricingComponent;
