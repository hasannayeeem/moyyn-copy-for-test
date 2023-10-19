import styled from "styled-components";
export const Section = styled.section`
width: 1440px;
display: flex;
justify-content: center;
padding: ${({ padding }) => padding || "30px 0"};
align-items: ${({ align }) => align || "center"};
`;
export const ButtonWrapper = styled.div`
width: 100%;
text-align: ${({ align }) => align || "center"};;
margin-bottom: 20px;
`;