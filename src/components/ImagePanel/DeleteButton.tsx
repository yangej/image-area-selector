import styled from "@emotion/styled";

import IconDelete from "@/assets/icon-delete.png";

const Container = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 4px;
`;

const Icon = styled.img`
  width: 24px;
`;

interface Props {
  onClick(): void;
}

const DeleteButton = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Icon src={IconDelete} />
    </Container>
  );
};

export default DeleteButton;
