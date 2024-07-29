import styled from "@emotion/styled";
import ImagePanel from "./components/ImagePanel/ImagePanel";
import PreviewPanel from "./components/PreviewPanel";

const Container = styled.div`
  display: flex;
  gap: 135px;
`;

export function App() {
  return (
    <Container>
      <ImagePanel />
      <PreviewPanel content="test" />
    </Container>
  );
}
