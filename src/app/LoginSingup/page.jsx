"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isToggle && formData.Password !== formData.ConfirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Form submitted successfully!");
      console.log("submitted form data:", formData);
    }
  };

  const toggleForm = () => {
    setIsToggle(!isToggle);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center bg-gray-100 gap-4 min-h-screen items-center flex-col">
      <div className="border rounded-lg shadow-md">
        <button
          onClick={toggleForm}
          className="py-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-t-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {isToggle ? "Switch to Signup" : "Switch to LOgin"}
        </button>
        {isToggle ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center max-w-2xl gap-5 p-6 rounded-b-lg bg-white"
          >
            <input
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              type="email"
              placeholder="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
            <div className="relative w-full">
              <input
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <div className="relative w-full">
              <input
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Signup
            </button>
          </form>
        ) : (
          <div className="border rounded-lg shadow-md">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center max-w-2xl gap-5 p-6 rounded-b-lg bg-white"
            >
              <input
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                type="email"
                placeholder="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
              />
              <div className="relative w-full">
                <input
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default Page;