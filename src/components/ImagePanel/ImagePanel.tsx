import styled from "@emotion/styled";
import Header from "./Header";
import ImageUploader from "./ImageUploader";

const Container = styled.div`
  width: 433px;
  min-height: 792px;
  overflow: hidden;
  background-color: #f4f9fa;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
`;

const ContentContainer = styled.div`
  padding: 40px;
`;

const ImagePanel = () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <ImageUploader />
      </ContentContainer>
    </Container>
  );
};

export default ImagePanel;
