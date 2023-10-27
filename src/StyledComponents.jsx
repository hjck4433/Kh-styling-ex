import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) =>
    props.color || "blue"}; // props.color 가 없으면 blue 적용 (blue가 default)
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <>
      <Box color="orange">
        <Button>안녕하세요.</Button>
        <Button inverted={true}>테두리만 나옴</Button>
      </Box>
      <Box></Box>
    </>
  );
};
export default StyledComponent;
