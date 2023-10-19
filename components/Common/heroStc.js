import styled from "styled-components";
export const Section = styled.section`
width: 1440px;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0 0 0;
`;
export const TextColumn = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const VideoColumn = styled.div`
  flex: 1;
`;

export const Heading = styled.h1`
  font-size: 35px;
  margin-bottom: 25px;
  letter-spacing: 0.1px;
  line-height: 53px;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #7a7a7a;
  margin-bottom: 1rem;
`;

export const Video = styled.video`
  max-width: 100%;
  height: auto;
`;
export const Image = styled.img`
  max-width: 100%;
`;