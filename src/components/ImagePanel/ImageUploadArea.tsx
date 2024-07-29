import styled from "@emotion/styled";

import IconImage from "@/assets/icon-image.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 156px;
  background-color: white;
  border: 2px solid #dcdee2;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 28px;
`;

const Text = styled.div`
  color: #88929d;
  font-size: 14px;
`;

const ImageUploadArea = () => {
  return (
    <Container>
      <Icon src={IconImage} />
      <Text>Upload Image</Text>
    </Container>
  );
};

export default ImageUploadArea;
