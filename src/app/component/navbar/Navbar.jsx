"use client"
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";

const Navbar = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="">
      <div className="">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Please enter your name";
            }
            if (!values.email) {
              errors.email = "Please enter your email";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Please enter your password";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <div className=" flex justify-center items-center flex-col gap-5 border mt-1 max-w-sm mx-auto p-8">
                <Field
                  name="name"
                  type="text"
                  className="border w-full px-3 py-2 rounded-sm"
                  placeholder="Name"
                />
                <ErrorMessage name="name" component="div" />
                <Field
                  name="email"
                  type="email"
                  className="border px-3 w-full py-2 rounded-sm"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" />
                <div className="relative w-full">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="border px-3 w-full py-2 rounded-sm"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-3 py-2"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" />
                <button
                  disabled={isSubmitting || !isValid}
                  type="submit"
                  className="border px-5 py-2 bg-red-500 rounded-md"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Navbar;
