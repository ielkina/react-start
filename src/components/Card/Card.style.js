import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ishide}) => (ishide ? "blue" : "black")};
  color: black;
  width: 300px;
  &:hover {
    background-color: black;
  }
`;
export const Photo = styled.img`
  width: 300px;
  height: 200px;
`;
