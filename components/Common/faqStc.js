import { styled } from "styled-components";

export const ImageColumn = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 494px;
  height: 277px;
`;

export const ContentColumn = styled.div`
  flex: 1;
`;

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const ToggleItem = styled.div`
  margin: 10px 0;
`;

export const ToggleTitle = styled.a`
  text-decoration: none;
  color: ${(props) => (props.isOpen ? "#6EB6FF" : "#54595F")};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eeeeee;
`;

export const ToggleIcon = styled.i`
  margin-right: 5px;
  display: flex;
  justify-content: right;
`;

export const ToggleContent = styled.div`
  height: ${(props) => (props.isOpen ? "100%" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: all 0.3s;
  grid-column-start: 1;
  grid-column-end: 3;
  color: #7a7a7a;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-center;
`;
