import { styled } from "styled-components";

export const Row = styled.div`
  display: flex;
  margin-bottom: 0px;
  margin: 15px 0;
`;
export const ContentColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageColumn = styled.div`
  margin-right: 10px;
  width: 50%;
  display: inline-block;
`;

export const Image = styled.img`
  height: auto;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
  transition-duration: 0.3s;
  &:hover {
    transform: scale(0.9)
  }
`;

export const ImageBoxTitle = styled.span`
  font-weight: 600;
  color: #000000;
  font-family: "Poppins", Sans-serif;
  font-size: 25px;
  line-height: 25px;
`;

export const ImageBoxDescription = styled.p`
  font-family: "Poppins", Sans-serif;
  font-size: 14px;
  line-height: 26px;
  color: #7a7a7a;
  font-weight: 400;
`;
export const Heading = styled.h1`
  color: #000000;
  font-family: "Pacifico", Sans-serif;
  font-size: 35px;
  line-height: 53px;
  letter-spacing: 0.1px;
  text-align: center;
  margin-bottom: 50px;
`;