import { IArea } from "@bmunozg/react-image-area";
import styled from "@emotion/styled";
import { useMemo, useState } from "react";

import ImagePanel from "./components/ImagePanel/ImagePanel";
import PreviewPanel from "./components/PreviewPanel";
import { pick } from "./utils/common";

const Container = styled.div`
  display: flex;
  gap: 135px;
`;

export function App() {
  const [areas, setAreas] = useState<IArea[]>([]);

  const displayedValue = useMemo(() => {
    return JSON.stringify(
      areas.map((area) => pick(area, ["x", "y", "width", "height"])),
    );
  }, [areas]);

  const handleAreasChange = (areas: IArea[]) => {
    setAreas(areas);
  };

  return (
    <Container>
      <ImagePanel areas={areas} onChange={handleAreasChange} />
      <PreviewPanel content={displayedValue} />
    </Container>
  );
}
