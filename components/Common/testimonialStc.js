import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
`;

export const Column = styled.div`
  flex: 1;
  padding: 15px;
`;
export const Images = styled.div`
  display: flex;
  align-items: center;
  padding: 65px 0;
`;
export const ImagesBox = styled.div`
  flex-basis: calc(16.666% - 20px);
  max-width: calc(16.666% - 20px);
  margin: 10px;
`;

export const Heading = styled.h2`
  margin: 30px 0;
  text-align: center;
  color: #000000;
  font-family: "Poppins", Sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 42px;
  font-weight: 600;
`;

export const Testimonial = styled.div`
  font-size: 18px;
  color: #666;
  width: 50%;
  text-align: right;
  margin: 0 20px 0 0;
`;

export const ImageBox = styled.div`
  width: 50%;
`;

export const Image = styled.img`
  max-width: 80%;
  height: auto;
`;

export const Review = styled.div`
  display: flex;
  padding: 30px 0; 
`;