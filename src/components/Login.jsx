import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust the path to AuthContext as per your project structure
import { ButtonLeft } from './Button';
import { useNavigate } from 'react-router-dom';
import { TrainRounded } from "@mui/icons-material";
import axios from 'axios';

function Login() {
  const { login } = useAuth(); // Access login function from AuthContext
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userID: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    setLoading(TrainRounded)
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://minf-bac.vercel.app/api/auth/signin',
        formData, // formData will be automatically JSON stringified by axios
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );


      if (response.status !== 200) {
        throw new Error('Login failed');
      }

      const data = await response.data;
      const user = data.data.user;
      const token = data.token;

      // Simulate successful login
      login(token, user); // Call login function from AuthContext3
      setLoading(false)
      navigate("/profile")
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="bgr bg-[#E9EAEC] imgbg fixed h-[100vh] w-full top-0 left-0 z-50 flex flex-col justify-center items-center">
      {loading && ( // Render loading popup if loading is true
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-50">
                            <div class="loader">
                                <li class="ball"></li>
                                <li class="ball"></li>
                                <li class="ball"></li>
                            </div>
                        </div>
                    )}
      <div className='container w-[90%] mx-auto flex justify-center'>
        <div className='pt-5 pb-8 px-5 bg-[rgba(255,255,255,0.9)] shadow-xl rounded-xl'>
          <div className='flex flex-col items-center'>
            <div>
              <img className='h-[90px] md:h-[120px]' src='https://minf-minf.s3.ap-south-1.amazonaws.com/wbc.png' alt='logo' />
            </div>
            <h1 className='text-center text-2xl mt-2 interf text-gray-700 tracking-widest'>Welcome</h1>
            <p className='text-sm mt-1 text-gray-700 font-bold'>Sign in to <span className='text-green-700'>WBCAMTI</span></p>
            <div className='mt-2'>
              <form className='flex flex-col gap-5 mt-6' onSubmit={handleSubmit}>
                <div className="relative w-full min-w-[300px] font-bold h-15">
                  <input
                    className="peer w-full h-full bg-transparent text-gray-500 font-sans transition-all border-t-transparent placeholder-shown:border-2 placeholder-shown:border-gray-400 placeholder-shown:border-t-gray-400 border-2 focus:border-gray-400 outline-none focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-400"
                    placeholder=" "
                    type='text'
                    name='userID'
                    value={formData.userID}
                    onChange={handleChange}
                  />
                  <label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l-2 peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r-2 peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-gray-400 peer-focus:before:!border-gray-400 after:border-gray-400 peer-focus:after:!border-gray-400"
                  >
                    UserId
                  </label>
                </div>
              <div class="relative w-full min-w-[200px] h-11">
                <input
                  class="peer w-full h-full bg-transparent text-gray-500 font-sans transition-all border-t-transparent placeholder-shown:border-2 placeholder-shown:border-gray-400 placeholder-shown:border-t-gray-400 border-2 focus:border-gray-400 outline-none focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-400"
                  placeholder=" " type={showPassword ? 'text' : 'password'}/><label
                  class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l-2 peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r-2 peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-gray-400 peer-focus:before:!border-gray-400 after:border-gray-400 peer-focus:after:!border-gray-400">Password
                </label>
                <div className='flex justify-end mr-6 mt-[-20px]'>
                  <label class="containercus">
                    <input type="checkbox"  onClick={togglePasswordVisibility}/>
                    <svg class="eye" xmlns="http://www.w3.org/2000/svg" height="0.55em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
                    <svg class="eye-slash" xmlns="http://www.w3.org/2000/svg" height="0.55em" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"></path></svg>
                  </label>
                
              </div>
            </div>
                <div className="flex justify-center mt-3">
                  <button type="submit" className="protest w-[80%] text-md h-[50px] mx-auto">
                    <ButtonLeft prop={"Login"} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
