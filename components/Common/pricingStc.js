import styled from "styled-components";
export const Section = styled.section`
  width: 1440px;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
`;

export const PricingSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const PricingCard = styled.div`
  width: ${({ width }) => width};
  width: ${({ width }) => console.log(width)};
`;

export const PricingTable = styled.div`
  background: #6eb6ff;
  box-shadow: 0px 30px 65px 0px rgba(76, 88, 227, 0.4);
  padding: 30px 0;
  text-align: center;
  border-radius: 30px;
  width: ${({ width }) => console.log(width)};
`;

export const Price = styled.span`
  font-size: 45px;
  font-weight: 600;
  color: #6eb6ff;
  padding: 42px 0;
  display: block;
  background: #fff;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 30px 0 30px 40px;
  text-align: left;
  color: #fff;
`;

export const FeatureItem = styled.li`
  margin: 10px 0;
`;

export const Description = styled.div`
  padding: 20px;
  text-align: center;
  margin: 20px 0;
`;
export const Heading = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: #000;
  margin-bottom: 30px;
  text-align: center;
`;
