async function handleMultipleFileUpload(event, resolve, reject) {
  const files = event.target.files; // Get the selected files

  // Create a new FormData object
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]); // Append the files to the form data
  }

  // Send the files to the server
  fetch("/api/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        resolve("Files uploaded successfully");
      } else {
        reject(`${response.statusText}: ${response.status}`);
      }
    })
    .catch((error) => {
      reject(error);
    });
}

export default handleMultipleFileUpload;
