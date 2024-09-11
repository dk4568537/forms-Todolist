"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const InputForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await axios.post('/api/submit-form', values);
          console.log(response.data);
          resetForm();
        } catch (error) {
          console.error('Error submitting form:', error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <Form className="max-w-sm mx-auto bg-emerald-500 p-5 mt-5">
        <h1 className=' text-blue-500 text-center text-lg pb-5'>*Create New Account*</h1>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">
            First Name
          </label>
          <Field
            id="firstName"
            name="firstName"
            type="text"
            className="form-input mt-1 block w-full"
          />
          <ErrorMessage name="firstName" component="div" className="text-red-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">
            Last Name
          </label>
          <Field
            id="lastName"
            name="lastName"
            type="text"
            className="form-input mt-1 block w-full"
          />
          <ErrorMessage name="lastName" component="div" className="text-red-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email Address
          </label>
          <Field
            id="email"
            name="email"
            type="email"
            className="form-input mt-1 block w-full"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};


export default InputForm;
