import styled from "@emotion/styled";
import {
  AreaSelector,
  type IAreaSelectorProps,
} from "@bmunozg/react-image-area";
import ImageUploadArea from "./ImageUploadArea";
import { useState, type ChangeEventHandler } from "react";

const HiddenInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  width: 100%;
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

  return (
    <>
      <HiddenInput id="image-uploader" type="file" onChange={handleChange} />
      {previewURL ? (
        <AreaSelector areas={areas} onChange={onChange}>
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
