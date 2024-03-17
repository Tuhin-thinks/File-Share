import { useState } from "react";

const useOnUpload = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadFile = async (file) => {
    try {
      setIsLoading(true);
      // Your backend API endpoint for file upload
      const response = await fetch("/api/upload", {
        method: "POST",
        body: file,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      // File upload successful
      // Do something with the response if needed

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      uploadFile(file);
    }
  };

  return {
    file,
    isLoading,
    error,
    handleFileChange,
    handleUpload,
  };
};

export default useOnUpload;
