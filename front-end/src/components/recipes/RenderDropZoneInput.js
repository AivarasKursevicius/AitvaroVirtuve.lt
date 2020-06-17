import React from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone({ input, label, meta, renderError }) {
  const onDrop = (acceptedFiles) => {
    const { onChange } = input;
    acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    onChange(acceptedFiles);
  };

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({ onDrop, accept: "image/jpeg, image/jpg" });
  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  function dropImg() {
    if (acceptedFiles.length === 0 || acceptedFiles.length > 5) {
      const active = isDragActive ? { opacity: "0.5" } : { opacity: "0.3" };
      return (
        <p>
          Galite įkelti nuotrauka čia <br /> Formatas JPEG arba JPG <br />
          <i
            style={active}
            aria-hidden="true"
            className="download massive icon"
          ></i>
        </p>
      );
    } else {
      return;
    }
  }

  function renderPreview() {
    if (acceptedFiles.length < 5) {
      return acceptedFiles.map((file, index) => {
        if (index === 0) {
          return (
            <img
              className="imgGridSpan previewImg"
              key={index}
              src={file.preview}
              alt={file.name}
            />
          );
        } else {
          return (
            <img
              className="previewImg"
              key={index}
              src={file.preview}
              alt={file.name}
            />
          );
        }
      });
    } else {
      dropImg();
    }
  }

  return (
    <div className="field">
      <div className="ui horizontal divider">
        <label>{label}</label>
      </div>
      <div {...getRootProps()} id="_dropzone">
        <input {...getInputProps()} />
        {dropImg()}
        <div className="imgGrid">{renderPreview()}</div>
      </div>
      {renderError(meta)}
    </div>
  );
}
export default MyDropzone;
