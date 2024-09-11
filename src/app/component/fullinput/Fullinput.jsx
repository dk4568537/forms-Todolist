"use client"
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const Fullinput = () => {
  const [isSubmitted, setIssubmitted] = useState(false);
  const initialValues = {
    firstname: "",
    lastname: "",
    Email: "",
    password: "",
    location: "",
    state: "",
    postal: "",
    tel: ""
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Please enter your first Name"),
    lastname: Yup.string().required("Please enter your last Name"),
    Email: Yup.string().email("Invalid email").required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
    location: Yup.string().required("Please enter your location"),
    state: Yup.string().required("Please enter your state"),
    postal: Yup.string().required("Please enter your postal code"),
    tel: Yup.string().required("Please enter your telephone No")
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      localStorage.setItem('formData', JSON.stringify(values));
      setIssubmitted(true);
      resetForm();
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="h-screen md:flex md:justify-center md:items-center ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 grid grid-cols-1 md:grid-cols-2 gap-5 border rounded-lg p-5 bg-white shadow-lg">
            <Field
              name="firstname"
              className="border p-2 rounded-md"
              placeholder="First Name"
              type="text"
            />
            <ErrorMessage 
              name="firstname"
              component='div'
              className="text-white"
            />
            <Field
              name="lastname"
              className="border p-2 rounded-md"
              placeholder="Last Name"
              type="text"
            />
            <ErrorMessage 
              name="lastname"
              component='div'
              className="text-white"
            />
            <Field
              name="Email"
              className="border p-2 rounded-md"
              placeholder="Email"
              type="email"
            />
            <ErrorMessage 
              name="Email"
              component='div'
              className="text-white"
            />
            <Field
              name="password"
              className="border p-2 rounded-md"
              placeholder="Password"
              type="password"
            />
            <ErrorMessage 
              name="password"
              component='div'
              className="text-white"
            />
            <Field
              name="location"
              className="border p-2 rounded-md"
              placeholder="Location"
              type="text"
            />
            <ErrorMessage 
              name="location"
              component='div'
              className="text-white"
            />
            <Field
              name="state"
              className="border p-2 rounded-md"
              placeholder="State"
              type="text"
            />
            <ErrorMessage 
              name="state"
              component='div'
              className="text-white"
            />
            <Field
              name="postal"
              className="border p-2 rounded-md"
              placeholder="Postal Code"
              type="text"
            />
            <ErrorMessage 
              name="postal"
              component='div'
              className="text-white"
            />
            <Field
              name="tel"
              className="border p-2 rounded-md"
              placeholder="Phone Number"
              type="tel"
            />
            <ErrorMessage 
              name="tel"
              component='div'
              className="text-white"
            />
            <button
              type="reset"
              className="border rounded bg-red-500 text-white py-2 px-4 hover:bg-red-700"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="col-span-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Fullinput;
