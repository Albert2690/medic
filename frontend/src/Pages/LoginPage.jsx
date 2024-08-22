import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import apiInstance from '../Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
     return setError( "Invalid email format" );
    }

    if(password.length < 4){
       return setError('Password must be more than 5 characters');
    }
    

    try {
      const response = await apiInstance.post("/login/", {
        email,
        password,
      }, {
        withCredentials: true 
      });

      if (response.data.error) {
        setError(response.data.error || "Login failed");
      } else {
        toast.success("Login successful!");
        navigate("/");
     
    }
   } catch (error) {
      setError(error.response?.data?.error || error.response?.data?.message || "An unexpected error occurred");
    }
  };

  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen w-[80%] mt-10 text-gray-900 flex flex-col">
      <div className="flex-1 flex justify-center items-center">
        <div className="m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Sign in
              </h1>

              {error && (
                <div className="text-red-500 font-bold text-sm text-center my-4">{error}</div>
              )}
              <div className="w-full flex-1 mt-8">
                <form onSubmit={handleLogin} className="mx-auto relative max-w-xs">
                  <input
                    className="w-full px-8 py-4 pr-12 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email" placeholder="Email" value={email} onChange={handleEmail} />
                  <div className="relative mt-5">
                    <input
                      className="w-full px-8 py-4 pr-12 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      placeholder="Password"
                      onChange={handlePassword}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-cyan-200 text-gray-900 hover:text-gray-100 w-full py-4 rounded-lg hover:bg-gradient-to-r from-blue-300 to-cyan-200 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">
                      Sign In
                    </span>
                  </button>
                </form>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Vcare's
                  <a href="#" className="border-b ml-1 border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" className="border-b ml-1 border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center hidden lg:flex">
            <div className="m-7 lg:my-16 lg:mx-11 w-full bg-contain bg-center bg-no-repeat"
                 style={{ backgroundImage: "url('https://img.freepik.com/free-photo/front-view-young-female-doctor-white-medical-suit-with-stethoscope-wearing-white-protective-mask-white_140725-16556.jpg?t=st=1723481120~exp=1723484720~hmac=ef71a5b0c43f10336d684317c141b46f3561e67c806b3df0d16e32d2adb14045&w=996')" }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
