import React from "react";
import toast, { Toaster } from "react-hot-toast";
import uploadImage from "../../images/upload.png";
import "../../styles/uploadPage.styles.css";
import handleMultipleFileUpload from "./onUserUpload";
const UploadPage = () => {
  const fileInputRef = React.useRef(null);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="page-base">
      <title>Upload Page</title>
      <div>
        <Toaster toastOptions={{ style: { fontSize: "1.5rem" } }} />
      </div>
      <div className="upload-container" onClick={triggerFileInput}>
        <h1>Upload here!!</h1>
        <div className="upload-drop-zone">
          <div className="w-full shadow-lg rounded-lg my-2">
            <img
              className="object-contain w-12 mx-auto"
              src={uploadImage}
              alt="upload"
              style={{ aspectRatio: "1/2" }}
            />
          </div>
          <div className="drop-text flex items-center">
            <p className="mr-2 font-bold">Drag and drop</p>
            <p className="mr-2">or</p>
            <div>
              <input
                type="file"
                ref={fileInputRef}
                className="browse-button hidden"
                onChange={(e) => {
                  let functionPromise = new Promise((resolve, reject) => {
                    handleMultipleFileUpload(e, resolve, reject);
                  });
                  toast.promise(functionPromise, {
                    loading: "Uploading files...",
                    success: "Files uploaded successfully",
                    error: (e) => "Error uploading files" + e.toString(),
                  });
                  fileInputRef.current.value = null;
                }}
                multiple
              ></input>
              <button className="browse-button" onClick={triggerFileInput}>
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
