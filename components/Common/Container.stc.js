import { styled } from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width || "1120px"};
  padding: ${({ padding }) => padding || ""};
  margin: 0 auto;
`;
