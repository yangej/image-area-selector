import styled from "@emotion/styled";
import {
  AreaSelector,
  type IAreaSelectorProps,
} from "@bmunozg/react-image-area";
import ImageUploadArea from "./ImageUploadArea";
import { useState, type ChangeEventHandler } from "react";
import DeleteButton from "./DeleteButton";

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

  const handleAreaDelete = (areaNumber: number) => {
    const areaIndex = areaNumber - 1;

    onChange(areas.filter((_area, index) => index !== areaIndex));
  };

  return (
    <>
      <HiddenInput id="image-uploader" type="file" onChange={handleChange} />
      {previewURL ? (
        <AreaSelector
          areas={areas}
          onChange={onChange}
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
