import { IArea } from "@bmunozg/react-image-area";

export const are2AreasOverlapping = (areaA: IArea, areaB: IArea) => {
  const AMinX = areaA.x;
  const AMaxX = areaA.x + areaA.width;
  const AMinY = areaA.y;
  const AMaxY = areaA.y + areaA.height;

  const BMinX = areaB.x;
  const BMaxX = areaB.x + areaB.width;
  const BMinY = areaB.y;
  const BMaxY = areaB.y + areaB.height;

  const isALeftOfB = AMaxX < BMinX;
  const isARightOfB = AMinX > BMaxX;
  const isAAboveB = AMaxY < BMinY;
  const isABelowB = AMinY > BMaxY;

  return !(isALeftOfB || isARightOfB || isAAboveB || isABelowB);
};

export const areAnyAreasOverlapping = (areas: IArea[]) => {
  for (let i = 0; i < areas.length - 1; i++) {
    const target = areas[i];

    for (let j = i + 1; j < areas.length; j++) {
      const compared = areas[j];

      if (are2AreasOverlapping(target, compared)) return true;
    }
  }

  return false;
};
