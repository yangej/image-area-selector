import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #ebf0f3;
  padding: 16px 24px;
`;

const Circle = styled.div`
  background-color: #d4dade;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Header = () => {
  return (
    <Container>
      <Circle />
    </Container>
  );
};

export default Header;
