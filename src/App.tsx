import { IArea } from "@bmunozg/react-image-area";

import styled from "@emotion/styled";
import ImagePanel from "./components/ImagePanel/ImagePanel";
import PreviewPanel from "./components/PreviewPanel";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  gap: 135px;
`;

export function App() {
  const [areas, setAreas] = useState<IArea[]>([]);

  const handleAreasChange = (areas: IArea[]) => {
    setAreas(areas);
  };

  return (
    <Container>
      <ImagePanel areas={areas} onChange={handleAreasChange} />
      <PreviewPanel content={JSON.stringify(areas)} />
    </Container>
  );
}
