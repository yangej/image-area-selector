import {
  AreaSelector,
  type IAreaSelectorProps,
} from "@bmunozg/react-image-area";
import styled from "@emotion/styled";
import { type ChangeEventHandler, useState } from "react";

import { areAnyAreasOverlapping } from "@/utils/imageArea";

import DeleteButton from "./DeleteButton";
import ImageUploadArea from "./ImageUploadArea";

const HiddenInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  width: 100%;
`;

const DeleteButtonWrapper = styled.div`
  position: absolute;
  right: -40px;
`;

export interface ImageUploaderProps
  extends Pick<IAreaSelectorProps, "areas" | "onChange"> {}

const ImageUploader = ({ areas, onChange }: ImageUploaderProps) => {
  const [previewURL, setPreviewURL] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files ?? [];
    const fileURL = URL.createObjectURL(files[0]);
    setPreviewURL(fileURL);
  };

  const handleAreaChange: IAreaSelectorProps["onChange"] = (areas) => {
    if (areAnyAreasOverlapping(areas)) return;

    onChange(areas);
  };

  const handleAreaDelete = (areaNumber: number) => {
    const areaIndex = areaNumber - 1;

    onChange(areas.filter((_area, index) => index !== areaIndex));
  };

  return (
    <>
      <HiddenInput
        id="image-uploader"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      {previewURL ? (
        <AreaSelector
          areas={areas}
          onChange={handleAreaChange}
          customAreaRenderer={({ areaNumber }) => (
            <DeleteButtonWrapper key={areaNumber}>
              <DeleteButton onClick={() => handleAreaDelete(areaNumber)} />
            </DeleteButtonWrapper>
          )}
        >
          <PreviewImage src={previewURL} />
        </AreaSelector>
      ) : (
        <label htmlFor="image-uploader">
          <ImageUploadArea />
        </label>
      )}
    </>
  );
};

export default ImageUploader;
