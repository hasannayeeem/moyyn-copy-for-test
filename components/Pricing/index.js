import React from "react";
import { Container } from "../Common/Container.stc";
import { ButtonWrapper } from "../Common";
import { SecondaryBtn } from "../Common/SecondaryBtn.stc";
import { PrimaryBtn } from "../Common/PrimaryBtn.stc";
import { Description, FeatureItem, FeatureList, Heading, Price, PricingCard, PricingSection, PricingTable, Section } from "../Common/pricingStc";


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
