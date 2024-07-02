import React, { useState } from 'react';
import AWS from "aws-sdk";
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import { TrainRounded } from "@mui/icons-material";
import axios from 'axios';

export default function Wbcamti01form({userfc}) {


    const initialFromData = {
        state: '',
        register_as: '',
        name: '',
        age: '',
        gender: '',
        weight: '',
        height: '',
        dob: '',
        mobile: '',
        email: '',
        address: '',
        district: '',
        pincode: '',
        ageCategory: '',
        weightCategory: '',
        bloodGroup: '',
        guardianMobile: '',
        uniformSize: '',
        Image: '',
        Aadhaar: '',
    }

    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setcImage] = useState(null);
    const [aimage, setaImage] = useState(null);
    const [selectedAadhaar, setSelectedAadhaar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState(initialFromData);



    const wcat = {
        "Male": {
            "U-10": ["30 kg", "32 kg", "34 kg", "36 kg", "38 kg", "40 kg", "42 kg", "44 kg", "46 kg", "48 kg", "50 kg", "52 kg", "54 kg", "56 kg", "58 kg", "60 kg", "63.5 kg", "65 kg", "+71 kg"],
            "U-12": ["30 kg", "32 kg", "34 kg", "36 kg", "38 kg", "40 kg", "42 kg", "44 kg", "46 kg", "48 kg", "50 kg", "52 kg", "54 kg", "56 kg", "58 kg", "60 kg", "63.5 kg", "65 kg", "+71 kg"],
            "U-14": ["32 kg", "34 kg", "36 kg", "38 kg", "40 kg", "42 kg", "44 kg", "46 kg", "48 kg", "50 kg", "52 kg", "54 kg", "56 kg", "58 kg", "60 kg", "63.5 kg", "65 kg", "67 kg", "+71 kg"],
            "U-16": ["102-105 lb", "105-108 lb", "108-112 lb", "112-115 lb", "115-118 lb", "118-122 lb", "122-126 lb", "126-130 lb", "130-135 lb", "135-140 lb", "140-147 lb", "147-154 lb", "154-160 lb", "160-168 lb", "168-175 lb", "175-185 lb", "185-194 lb"],
            "U-18": ["102-105 lb", "105-108 lb", "108-112 lb", "112-115 lb", "115-118 lb", "118-122 lb", "122-126 lb", "126-130 lb", "130-135 lb", "135-140 lb", "140-147 lb", "147-154 lb", "154-160 lb", "160-168 lb", "168-175 lb", "175-185 lb", "185-194 lb"],
            "18+": ["45 kg", "48 kg", "51 kg", "54 kg", "57 kg", "60 kg", "63.5 kg", "67 kg", "71 kg", "76 kg", "81 kg", "86 kg", "91 kg", "96+ kg"]
        },
        "Female": {
            "U-10": ["30 kg", "32 kg", "34 kg", "36 kg", "38 kg", "40 kg", "42 kg", "44 kg", "46 kg", "48 kg", "50 kg", "52 kg", "54 kg", "56 kg", "58 kg", "60 kg", "63.5 kg", "65 kg", "+71 kg"],
            "U-12": ["30 kg", "32 kg", "34 kg", "36 kg", "38 kg", "40 kg", "42 kg", "44 kg", "46 kg", "48 kg", "50 kg", "52 kg", "54 kg", "56 kg", "58 kg", "60 kg", "63.5 kg", "65 kg", "+71 kg"],
            "U-14": ["32 kg", "34 kg", "36 kg", "38 kg", "40 kg", "42 kg", "44 kg", "46 kg", "48 kg", "50 kg", "52 kg", "54 kg", "56 kg", "58 kg", "60 kg", "63.5 kg", "65 kg", "67 kg", "+71 kg"],
            "U-16": ["98 -102 lb", "102-105 lb", "105-108 lb", "108-112 lb", "112-115 lb", "115-118 lb", "118-122 lb", "122-126 lb", "126-130 lb", "130-135 lb", "135-140 lb", "140-147 lb", "147-154 lb", "154-160 lb", "160-168 lb", "168-175 lb", "175-185 lb", "185-194 lb"],
            "U-18": ["98 -102 lb", "102-105 lb", "105-108 lb", "108-112 lb", "112-115 lb", "115-118 lb", "118-122 lb", "122-126 lb", "126-130 lb", "130-135 lb", "135-140 lb", "140-147 lb", "147-154 lb", "154-160 lb", "160-168 lb", "168-175 lb", "175-185 lb", "185-194 lb"],
            "18+": ["45 kg", "48 kg", "51 kg", "54 kg", "57 kg", "60 kg", "63.5 kg", "67 kg", "71 kg", "75 kg", "76 kg", "81 kg", "86 kg", "91 kg", "96+ kg"]
        },
    }


    const handleImageChange = (event, setImage) => {
        const file = event.target.files[0];
        const _name = event.target.name
        if (file) {
            _name === "Image" ? setcImage(file) : setaImage(file)
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };



    const handleSingleFileUpload = async (event, name) => {
        event.preventDefault()
        if (!selectedImage) {
            alert(`Please Select ${name}`)
            return;
        }
        setLoading(TrainRounded)
        let link = ""
        if (name === "Image") {
            link = await uploadToS3(image);
        } else {
            link = await uploadToS3(aimage);
        }
        setFormData({
            ...formData,
            [name]: link,
        });
        if (link) {
            setLoading(false)
        } else {
            setLoading(false)
            alert(`Error Uploading ${name} `)
        }
    };

    const uploadToS3 = async (file) => {
        const S3 = new AWS.S3({
            accessKeyId: process.env.REACT_APP_ACCESSKEYID,
            secretAccessKey: process.env.REACT_APP_SECRETACCESSKEY,
            region: process.env.REACT_APP_REGION
        });

        const params = {
            Bucket: process.env.REACT_APP_BUCKET,
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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        setLoading(TrainRounded)
        e.preventDefault();
        const newFormData = {
            ...formData,
            username: userfc.name
        }
        try {
            await axios.post(
                `https://minf-bac.vercel.app/submit-form/${userfc.userID}`,
                newFormData
            );

            setMessage("Thanks for Registering")
            setFormData(initialFromData)
            setLoading(false)

        } catch (error) {
            setMessage("Error")
        }

    };

    return (
        <>
            <div className="container mx-auto w-[80%] md:w-[70%]">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="state">
                                State
                            </label>
                            <div className="relative">
                                <select
                                    className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                >
                                    <option disabled value="">
                                        Select a State/Union Territory
                                    </option>
                                    {/* Add all states here */}
                                    <option>Andaman and Nicobar Islands</option>
                                    <option>Andhra Pradesh</option>
                                    <option>Arunachal Pradesh</option>
                                    <option>Assam</option>
                                    <option>Bihar</option>
                                    <option>Chandigarh</option>
                                    <option>Chhattisgarh</option>
                                    <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option>Delhi</option>
                                    <option>Goa</option>
                                    <option>Gujarat</option>
                                    <option>Haryana</option>
                                    <option>Himachal Pradesh</option>
                                    <option>Jammu and Kashmir</option>
                                    <option>Jharkhand</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                    <option>Ladakh</option>
                                    <option>Lakshadweep</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Maharashtra</option>
                                    <option>Manipur</option>
                                    <option>Meghalaya</option>
                                    <option>Mizoram</option>
                                    <option>Nagaland</option>
                                    <option>Odisha</option>
                                    <option>Puducherry</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Sikkim</option>
                                    <option>Tamil Nadu</option>
                                    <option>Telangana</option>
                                    <option>Tripura</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Uttarakhand</option>
                                    <option>West Bengal</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="age">
                                Age
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="age"
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="gender">
                                Gender
                            </label>
                            <div className="relative">
                                <select
                                    className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option disabled value="">
                                        Gender
                                    </option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="weight">
                                Weight
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="weight"
                                type="number"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="height">
                                Height
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="height"
                                type="number"
                                name="height"
                                value={formData.height}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="dob">
                                D.O.B
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="dob"
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="mobile">
                                Mobile
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="mobile"
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                pattern="[0-9]{10}"
                                title="mobile number"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="gender">
                                Register As
                            </label>
                            <div className="relative">
                                <select
                                    className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    id="register_as"
                                    name="register_as"
                                    value={formData.register_as}
                                    onChange={handleChange}
                                    required
                                >
                                    <option disabled value="">
                                        Register As
                                    </option>
                                    <option value="F">Fighter</option>
                                    <option value="G">Guest</option>
                                    <option value="T">Team Head</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="address"
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="district">
                                District
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="district"
                                type="text"
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="pincode">
                                Pincode
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="pincode"
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="ageCategory">
                                Age Category
                            </label>
                            <div className="relative">
                                <select
                                    className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    id="ageCategory"
                                    name="ageCategory"
                                    value={formData.ageCategory}
                                    onChange={handleChange}
                                    required
                                >
                                    <option disabled value="">
                                        Select Age Category
                                    </option>
                                    {/* Add your age categories here */}
                                    <option value="U-10">Below 10 years</option>
                                    <option value="U-12">Under 12 years</option>
                                    <option value="U-14">Under 14 years</option>
                                    <option value="U-16">Under 16 years</option>
                                    <option value="U-18">Under 18 years</option>
                                    <option value="18+">18 - 40 years</option>

                                </select>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="weightCategory">
                                Weight Category
                            </label>
                            <div className="relative">
                                <select
                                    className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    id="weightCategory"
                                    name="weightCategory"
                                    value={formData.weightCategory}
                                    onChange={handleChange}
                                    required
                                >
                                    <option disabled value="">
                                        Select Weight Category
                                    </option>
                                    {formData.ageCategory &&
                                        formData.gender &&
                                        wcat[formData.gender][formData.ageCategory].map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="bloodGroup">
                                Blood Group
                            </label>
                            <select
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="bloodGroup"
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleChange}
                                required
                            >
                                <option disabled value="">
                                    Blood Group
                                </option>
                                {/* Add uniform sizes here */}
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="guardianMobile">
                                Parents/Guardian Mobile
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                id="guardianMobile"
                                type="tel"
                                name="guardianMobile"
                                value={formData.guardianMobile}
                                onChange={handleChange}
                                pattern="[0-9]{10}"
                                title="mobile number"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-md interf font-bold mb-2" htmlFor="uniformSize">
                                Uniform Size
                            </label>
                            <div className="relative">
                                <select
                                    className="appearance-none block w-full bg-transparent border-2 border-gray-500 text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    id="uniformSize"
                                    name="uniformSize"
                                    value={formData.uniformSize}
                                    onChange={handleChange}
                                    required
                                >
                                    <option disabled value="">
                                        Select Uniform Size
                                    </option>
                                    {/* Add uniform sizes here */}
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>Extra Large</option>
                                </select>
                            </div>
                        </div>
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

                    {/* UPLOAD LOGIC */}
                    <div className='w-[80%] md:flex container mx-auto'>
                        {/* Cover Image Upload */}
                        <div className="relative md:w-1/2 w-full gap-3 md:flex-row flex-col flex justify-center items-center mb-12">
                            <div className={`relative cursor-pointer text-center block ${selectedImage ? "w-36 h-36" : "md:w-36 md:h-16 w-full h-[50px]"} border-2 border-gray-500`}>
                                <label htmlFor="Image" className="flex justify-center items-center h-full w-full cursor-pointer block">
                                    {selectedImage ? (
                                        <img src={selectedImage} alt="Selected Cover" className="w-full h-full object-contain" />
                                    ) : (
                                        <>
                                            Photo <UploadRoundedIcon fontSize="large" color="action" />
                                        </>
                                    )}
                                    <input
                                        className="hidden bg-transparent border-2 rounded-md w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
                                        type="file"
                                        name="Image"
                                        id="Image"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, setSelectedImage)}
                                    />
                                </label>
                            </div>
                            <div className="flex justify-center">
                                <button className="interf text-sm bg-gray-700 text-white px-5 py-3 rounded-md tracking-widest" onClick={(e) => handleSingleFileUpload(e, "Image")}>
                                    Upload Image
                                </button>
                            </div>
                        </div>

                        {/* Aadhaar Image Upload */}
                        <div className="relative md:w-1/2 w-full gap-3 md:flex-row flex-col flex justify-center items-center mb-12">
                            <div className={`relative cursor-pointer text-center block ${selectedAadhaar ? "w-36 h-36" : "md:w-36 md:h-16 w-full h-[50px]"} border-2 border-gray-500`}>
                                <label htmlFor="aadhaarImage" className="flex justify-center items-center h-full w-full cursor-pointer block">
                                    {selectedAadhaar ? (
                                        <img src={selectedAadhaar} alt="Selected Aadhaar" className="w-full h-full object-contain" />

                                    ) : (
                                        <>
                                            Aadhaar<UploadRoundedIcon fontSize="large" color="action" />
                                        </>
                                    )}
                                    <input
                                        className="hidden bg-transparent border-2 rounded-md w-full mt-1 mb-4 border-gray-500 p-1 outline-none"
                                        type="file"
                                        name="aadhaarImage"
                                        id="aadhaarImage"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, setSelectedAadhaar)}
                                    />
                                </label>
                            </div>

                            <div className="flex justify-center">
                                <button className="interf text-sm bg-gray-700 text-white px-5 py-3 rounded-md tracking-widest" onClick={(e) => handleSingleFileUpload(e, "Aadhaar")}>
                                    Upload Aadhaar
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Upload Logic */}


                    <div className="flex justify-center">
                        <button
                            className="bg-green-600 w-[80%] hover:bg-green-800 text-white interf py-2 tracking-widest text-xl px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                    
                </form>

                <div className={`h-[100vh] ${message ? "flex" : "hidden"} w-[100%] mx-auto bg-[rgba(0,0,0,0.7)] fixed px-5 md:px-0 top-0 left-0 z-50 justify-center items-center`}>
                    <div className="bg-[#E9EAEC] h-[50vh] flex text-[#183557] text-xl flex-col justify-center items-center gap-5 text-center interf w-full opacity-100 md:w-[50%]">
                        <p>{message}</p>
                        <button onClick={() => { setMessage("") 
                            if(message ==="Thanks for Registering"){
                                window.location.reload(); 
                            }
                        }} className={`px-5 tracking-widest py-3 ${message === "Thanks for Registering" ? "bg-green-600" : "bg-red-600"} text-white interf`}>{message === "Thanks for Registering" ? "OKAY" : "RETRY"}</button>
                    </div>
                </div>
            </div>
        </>
    )

}