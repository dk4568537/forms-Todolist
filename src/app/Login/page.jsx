"use client";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [formfield, setFormfield] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isDissabled, setIsDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    const { name, email, password, confirmPassword } = formfield;
    if (isToggle) {
      setIsDisabled(
        !(
          name &&
          email &&
          password &&
          confirmPassword &&
          password === confirmPassword
        )
      );
    } else {
      setIsDisabled(!(email && password));
    }
  }, [formfield, isToggle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormfield({
      ...formfield,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form data!:", formfield);
    setFormfield({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const toggleForm = () => {
    setIsToggle(!isToggle);
  };

  const toggleShowPassword = () =>{
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-slate-100">
      <button
        onClick={toggleForm}
        className="text-3xl pb-4 text-green-500 font-bold"
      >
        {isToggle ? "Signup" : "Login"}
      </button>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col border rounded-lg p-8 gap-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md"
      >
        {isToggle && (
          <input
            className="border p-6 py-3 rounded-md w-full"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={formfield.name}
            required
          />
        )}
        <input
          className="border p-6 py-3 rounded-md w-full"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formfield.email}
          required
        />
        <div className=" relative w-full">
        <input
          className="border p-6 py-3 rounded-md w-full"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formfield.password}
          required
        />
        <button className=" absolute inset-y-0 right-0 pr-4 text-sm leading-5 ">
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
        </div>
        {isToggle && (
         <div className=" relative w-full">
             <input
            className="border p-6 py-3 rounded-md w-full"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            value={formfield.confirmPassword}
            required
          />
          <button onClick={toggleShowPassword} className=" absolute inset-y-0 right-0 pr-4 text-sm leading-5">
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
         </div>
        )}
        <button
          disabled={isDissabled}
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-center w-24 py-2 rounded-md focus:right-2 outline-none ring-2 ring-green-500"
        >
          {isToggle ? "Signup" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Page;
