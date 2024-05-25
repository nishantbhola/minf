import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [upload, setUpload] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = (event) => {
    setUpload(event.target.value);
  };

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  const handleImagesChange = (event) => {
    setImages([...event.target.files]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("upload", upload);
    formData.append("description", description);
    formData.append("coverimage", coverImage);
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await axios.post(
        "http://minf-backend.vercel.app/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error occurred during upload.");
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Upload to:</label>
        <select
          type="text"
          name="upload"
          id="upload"
          value={upload}
          onChange={handleUpload}
        >
          <option value=""></option>
          <option value="FeaturedNews">Featured</option>
          <option value="events">event</option>
        </select>
        <br />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <br />

        <label htmlFor="coverImage">Cover Image:</label>
        <input
          type="file"
          name="coverImage"
          id="coverImage"
          accept="image/*"
          onChange={handleCoverImageChange}
        />
        <br />

        <label htmlFor="images">Images (up to 3):</label>
        <input
          type="file"
          name="images"
          id="images"
          multiple
          accept="image/*"
          onChange={handleImagesChange}
        />
        <br />

        <button type="submit">Upload</button>
      </form>

      <div>{message}</div>
    </div>
  );
};

export default FileUpload;
