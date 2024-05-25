import React, { useState } from "react";
import axios from "axios";
import { ButtonLeft } from "../Button";
import AWS from "aws-sdk";
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import { TrainRounded } from "@mui/icons-material";

const FileUpload = () => {

  const password = "Bhola@123";
  const [val, setVal]= useState("")
  const [formAccess, setFormAccess]= useState(true)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [upload, setUpload] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const [showForm, setShowForm] = useState(true);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = (event) => {
    setUpload(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when submitting

    const formData = {
      upload: upload,
      title: title,
      description: description,
      coverimage: coverImage,
      images: images
    }
    console.log(formData)
    try {
      const response = await axios.post(
        "https://minf-backend.vercel.app/upload",
        formData
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
    } finally {
      setLoading(false); // Set loading to false after response
    }
  };

  const deleteNews = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when deleting

    const formData = new FormData();
    formData.append("title", title);
    formData.append("upload", upload);
    try {
      await axios.post(
        `https://minf-backend.vercel.app/${upload}/${title}`,
        formData
      );
      setTitle("");
      setUpload("");
      setMessage("done");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error occurred during upload.");
    } finally {
      setLoading(false); // Set loading to false after response
    }
  };


  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const handleSingleFileChange = (event) => {
    event.preventDefault()
    setSingleFile(event.target.files[0]);
  };

  const handleMultipleFilesChange = (event) => {
    event.preventDefault()
    setMultipleFiles([...event.target.files]);
  };

  const handleSingleFileUpload = async (event) => {
    event.preventDefault()
    setLoading(TrainRounded)
    if (!singleFile) {
      console.error("No file selected");
      return;
    }

    const link = await uploadToS3(singleFile);
    setCoverImage(link)
    console.log("Single file uploaded successfully. Link:", link);
    if(link){
      setLoading(false)
    }
  };

  const handleMultipleFilesUpload = async (event) => {
    event.preventDefault()
    setLoading(true)
    if (multipleFiles.length === 0) {
      console.error("No files selected");
      return;
    }

    const links = await Promise.all(multipleFiles.map(uploadToS3));
    console.log("Multiple files uploaded successfully. Links:", links);
    setImages(links)
    if(links){
      setLoading(false)
    }
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
    <div className={`conatiner ${formAccess ? "h-[80vh]" : "" } mx-auto w-[90%] md:w-[50%]`}>
      {
        formAccess ? (<>
        <div className={`h-[100vh] ${formAccess ? "flex" : "hidden"} w-[100%] mx-auto bg-[rgba(0,0,0,0.7)] fixed px-5 md:px-0 top-0 left-0 z-50 justify-center items-center`}>
          <div className="bg-[#E9EAEC] h-[50vh] flex text-[#183557] text-xl flex-col justify-center items-center gap-5 text-center interf w-full opacity-100 md:w-[50%]">
          <p>Enter Password</p>
          <input type="password" className="font-sans p-3 text-center" value={val} onChange={(e)=>setVal(e.target.value)}/>
          <button onClick={()=>{ if (val === password){setFormAccess(false)}}} className={`px-5 tracking-widest py-3 ${"bg-green-600"} text-white interf`}>{"Login"}</button>
          </div>
        </div>
        </>):
        (<>
          <h1 className="mt-12 text-center text-3xl interf mt-2">News Upload / delete</h1>
              <div className="flex w-full my-5">
                <button className={`w-full py-3 border-2 border-black interf ${showForm ? "" : "bg-black text-white"}`} onClick={() => { setShowForm(true) }}>Upload</button>
                <button className={`w-full py-3 border-2 border-black interf ${showForm ? "bg-black text-white" : ""}`} onClick={() => { setShowForm(false) }}>Delete</button>
              </div>

              {loading && ( // Render loading popup if loading is true
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-50">
                  <div class="loader">
                    <li class="ball"></li>
                    <li class="ball"></li>
                    <li class="ball"></li>
                  </div>
                </div>
              )}

              {showForm ? (
                <form className="mx-auto">
                  <label htmlFor="title" className="interf text-xl text-gray-600 ">Upload to:</label><br />
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
                  <label htmlFor="title" className="interf text-xl text-gray-600 ">Title:</label><br />
                  <input
                    className="bg-transparent border-2 w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                  />

                  <label htmlFor="description" className="interf text-xl text-gray-600 ">Description:</label><br />
                  <textarea
                    className="bg-transparent h-auto border-2 w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
                    name="description"
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                  />

                  <label htmlFor="coverImage" className=" cursor-pointer interf text-xl text-gray-600 w-full text-center py-8 border-gray-500 border-2 block">Cover Image <UploadRoundedIcon fontSize="large" color="action" />
                    <input
                      className=" hidden bg-transparent border-2 rounded-md w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
                      type="file"
                      name="coverImage"
                      id="coverImage"
                      accept="image/*"
                      onChange={handleSingleFileChange}
                    />
                  </label>
                  <div className="flex justify-center mt-2"><button onClick={handleSingleFileUpload} className="protest w-[80%] text-md h-[50px] mx-auto"><ButtonLeft prop={"Upload Cover Image"} /></button></div><br />

                  <label htmlFor="images" className=" cursor-pointer interf text-xl text-gray-600 w-full text-center py-8 border-gray-500 border-2 block">Images <UploadRoundedIcon fontSize="large" color="action" />
                    <input
                      className=" hidden bg-transparent border-2 rounded-md w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
                      type="file"
                      name="images"
                      id="images"
                      multiple
                      accept="image/*"
                      onChange={handleMultipleFilesChange}
                    />
                  </label>
                  <div className="flex justify-center mt-2"><button onClick={handleMultipleFilesUpload}className="protest w-[80%] text-md h-[50px] mx-auto"><ButtonLeft prop={"Upload Images"} /></button></div><br/>
                  <div className="flex justify-center mt-3">
                    <button onClick={handleSubmit} className="protest w-[80%] text-md h-[50px] mx-auto">
                      <ButtonLeft prop={"Upload"} />
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <form onSubmit={deleteNews} className="mx-auto">
                    <label htmlFor="title" className="interf text-xl text-gray-600 ">Delete From:</label><br />
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
                    <label htmlFor="title" className="interf text-xl text-gray-600 ">Title:</label><br />
                    <input
                      className="bg-transparent border-2 w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      onChange={handleTitleChange}
                    />
                    <div className="flex justify-center mt-3">
                      <button type="submit" className="protest w-[80%] text-md h-[50px] mx-auto">
                        <ButtonLeft prop={"Delete"} />
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className={`h-[100vh] ${message ? "flex" : "hidden"} w-[100%] mx-auto bg-[rgba(0,0,0,0.7)] fixed px-5 md:px-0 top-0 left-0 z-50 justify-center items-center`}>
                <div className="bg-[#E9EAEC] h-[50vh] flex text-[#183557] text-xl flex-col justify-center items-center gap-5 text-center interf w-full opacity-100 md:w-[50%]">
                <p>{message}</p>
                <button onClick={()=>{setMessage("")}} className={`px-5 tracking-widest py-3 ${message === "done" ? "bg-green-600" : "bg-red-600"} text-white interf`}>{message === "done" ? "OKAY" :"RETRY"}</button>
                </div>
              </div>
        </>)
      }
    </div>
  );
};

export default FileUpload;
