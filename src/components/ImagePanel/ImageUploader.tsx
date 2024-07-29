import styled from "@emotion/styled";
import ImageUploadArea from "./ImageUploadArea";
import { useState, type ChangeEventHandler } from "react";

const HiddenInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  width: 100%;
`;

const ImageUploader = () => {
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
        <PreviewImage src={previewURL} />
      ) : (
        <label htmlFor="image-uploader">
          <ImageUploadArea />
        </label>
      )}
    </>
  );
};

export default ImageUploader;
