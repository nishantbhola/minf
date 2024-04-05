import React, { useState } from "react";
import axios from "axios";
import { ButtonLeft } from "../Button";
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';


const FileUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [upload, setUpload] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [images, setImages] = useState([]); 
  const [message, setMessage] = useState("");

  const [showForm, setShowForm] = useState(true)

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
        "https://successful-yoke-lion.cyclic.app/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTitle("");
      setDescription("");
      setUpload("");
      setCoverImage(null);
      setImages([]);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error occurred during upload.");
    }
  };

  const deleteNews = async (event) =>{
    event.preventDefault();
    console.log(upload)

    const formData = new FormData();
    formData.append("title", title);
    formData.append("upload", upload);
    try{
      const response = await axios.post(
        `https://successful-yoke-lion.cyclic.app/${upload}/${title}`,
        formData,
      )
      setTitle("")
      setUpload("");
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error occurred during upload.");
    }
  };

  return (
    <div className="conatiner mx-auto w-[90%] md:w-[50%]">
      <h1 className="mt-12 text-center text-3xl interf mt-2">News Upload / delete</h1>

      <div className="flex w-full my-5">
        <button className={`w-full py-3 border-2 border-black interf ${showForm ? "":"bg-black text-white"}`} onClick={()=>{setShowForm(true)}}>Upload</button>
        <button className={`w-full py-3 border-2 border-black interf ${showForm ? "bg-black text-white" : ""}`} onClick={()=>{setShowForm(false)}}>Delete</button>
      </div>

      {
        showForm ? (
          <form onSubmit={handleSubmit} className="mx-auto">
            <label htmlFor="title" className="interf text-xl text-gray-600 ">Upload to:</label><br/>
            <select
            className="bg-transparent border-2 w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
              type="text"
              name="upload"
              id="upload"
              value={upload}
              onChange={handleUpload}
              placeholder="Select where to upload"
            >
              <option value=""></option>
              <option value="FeaturedNews">Featured</option>
              <option value="events">event</option>
            </select>
            <label htmlFor="title" className="interf text-xl text-gray-600 ">Title:</label><br/>
            <input
              className="bg-transparent border-2 w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />

            <label htmlFor="description" className="interf text-xl text-gray-600 ">Description:</label><br/>
            <textarea
              className="bg-transparent border-2 w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
              name="description"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            />

            <label htmlFor="coverImage" className=" cursor-pointer interf text-xl text-gray-600 w-full text-center py-8 border-gray-500 border-2 block">Cover Image <UploadRoundedIcon fontSize="large" color="action"/>
            <input
              className=" hidden bg-transparent border-2 rounded-md w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
              type="file"
              name="coverImage"
              id="coverImage"
              accept="image/*"
              onChange={handleCoverImageChange}
            /></label><br/>

            <label htmlFor="images" className=" cursor-pointer interf text-xl text-gray-600 w-full text-center py-8 border-gray-500 border-2 block">Images <UploadRoundedIcon fontSize="large" color="action"/>
            <input
              className=" hidden bg-transparent border-2 rounded-md w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
              type="file"
              name="images"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImagesChange}
            />
            </label><br/>
            <div className="flex justify-center mt-3">
              <button type="submit" className="protest w-[80%] text-md h-[50px] mx-auto"> 
                    <ButtonLeft prop={"Upload"} />
              </button>
              </div>
          </form>
        ) : (
          <div>
            <form onSubmit={deleteNews} className="mx-auto">
              <label htmlFor="title" className="interf text-xl text-gray-600 ">Delete From:</label><br/>
              <select
              className="bg-transparent border-2 w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
                type="text"
                name="upload"
                id="upload"
                value={upload}
                onChange={handleUpload}
                placeholder="Select where to upload"
              >
                <option value=""></option>
                <option value="featured">Featured</option>
                <option value="events">event</option>
              </select>
              <label htmlFor="title" className="interf text-xl text-gray-600 ">Title:</label><br/>
              <input
                className="bg-transparent border-2 w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={handleTitleChange}
              />
              <div className="flex justify-center mt-3">
              <button type="submit"  className="protest w-[80%] text-md h-[50px] mx-auto"> 
                    <ButtonLeft prop={"Delete"} />
              </button>
              </div>
              </form>
            
          </div>
        )
      }

      <div>{message}</div>
    </div>
  );
};

export default FileUpload;
