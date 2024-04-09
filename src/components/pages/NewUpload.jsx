import React, { useState } from "react";
import AWS from "aws-sdk";

const NewUplaod = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const handleSingleFileChange = (event) => {
    setSingleFile(event.target.files[0]);
  };

  const handleMultipleFilesChange = (event) => {
    setMultipleFiles([...event.target.files]);
  };

  const handleSingleFileUpload = async () => {
    if (!singleFile) {
      console.error("No file selected");
      return;
    }

    const link = await uploadToS3(singleFile);
    console.log("Single file uploaded successfully. Link:", link);
  };

  const handleMultipleFilesUpload = async () => {
    if (multipleFiles.length === 0) {
      console.error("No files selected");
      return;
    }

    const links = await Promise.all(multipleFiles.map(uploadToS3));
    console.log("Multiple files uploaded successfully. Links:", links);
  };

  const uploadToS3 = async (file) => {
    const S3 = new AWS.S3({
      accessKeyId: "AKIA3FLD4UHXPHN7HOOG",
      secretAccessKey: "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",
      region: "ap-south-1"
    });

    const params = {
      Bucket: "minf-minf",
      Key: file.name,
      Body: file,
    };

    try {
      const data = await S3.upload(params).promise();
      return data.Location;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  return (
    <div>
      <h1>Upload File(s) to S3</h1>
      <div>
        <h3>Single File Upload</h3>
        <input type="file" onChange={handleSingleFileChange} />
        <button onClick={handleSingleFileUpload}>Upload Single File</button>
      </div>
      <div>
        <h3>Multiple Files Upload</h3>
        <input type="file" multiple nChange={handleMultipleFilesChange}o />
        <button onClick={handleMultipleFilesUpload}>Upload Multiple Files</button>
      </div>
    </div>
  );
};

export default NewUplaod;
