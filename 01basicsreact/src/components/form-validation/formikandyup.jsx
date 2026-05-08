import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormikandYup = () => {

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  }

  const validationSchema = Yup.object({
    firstname: Yup.string().required("first name is required"),
    lastname: Yup.string().required("last name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone is required"),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters")
      .required("Password is required")
      .matches(/^(?=.*[A-Z])(?=.*\d).+$/, "Password must contain uppercase and number"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must match")
      .required("Confirm Password is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .min(18, "You must be atleast 18 years old")
      .required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    interests: Yup.array().min(1, "Select at least one interest"),
    birthDate: Yup.date()
      .max(new Date(), "Birth date cannot be in the future")
      .required("Birth date is required"),
  })

  return (
    <div className="p-6 gap-4">
      <h2 className="text-xl font-bold mb-4">Form Using Yup and Formik</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form submitted successfully", values)
        }}
      >
         {({ values, setFieldValue }) => (
        <Form className="grid grid-cols-2 gap-6">

         /* {/* First Name */}
          <div className="flex flex-col">
            <label>First Name :</label>
            <Field name="firstname" className="border p-2 rounded" />
            <ErrorMessage name="firstname" component="span" className="text-red-500 text-sm" />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label>Last Name :</label>
            <Field name="lastname" className="border p-2 rounded" />
            <ErrorMessage name="lastname" component="span" className="text-red-500 text-sm" />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label>Email :</label>
            <Field name="email" className="border p-2 rounded" />
            <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label>Phone :</label>
            <Field name="phone" className="border p-2 rounded" />
            <ErrorMessage name="phone" component="span" className="text-red-500 text-sm" />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label>Password :</label>
            <Field type="password" name="password" className="border p-2 rounded" />
            <ErrorMessage name="password" component="span" className="text-red-500 text-sm" />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label>Confirm Password :</label>
            <Field type="password" name="confirmPassword" className="border p-2 rounded" />
            <ErrorMessage name="confirmPassword" component="span" className="text-red-500 text-sm" />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label>Age :</label>
            <Field name="age" className="border p-2 rounded" />
            <ErrorMessage name="age" component="span" className="text-red-500 text-sm" />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label>Gender :</label>
            <Field as="select" name="gender" className="border p-2 rounded">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <ErrorMessage name="gender" component="span" className="text-red-500 text-sm" />
          </div>

          {/* Interests */}
          <div className="col-span-2 flex flex-col">
            <label>Interests :</label>
            <div className="flex gap-4">
              <label>
                <Field type="checkbox" name="interests" value="coding" />
                Coding
              </label>
              <label>
                <Field type="checkbox" name="interests" value="sports" />
                Sports
              </label>
              <label>
                <Field type="checkbox" name="interests" value="reading" />
                Reading
              </label>
            </div>
            <ErrorMessage name="interests" component="span" className="text-red-500 text-sm" />
          </div>

          {/* Birth Date */}
          <div className="col-span-2 flex flex-col">
            <label>Birth Date :</label>
            <Field type="date" name="birthDate" className="border p-2 rounded" />
            <ErrorMessage name="birthDate" component="span" className="text-red-500 text-sm" />
          </div>

          {/* Submit */}
          <div className="col-span-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>

        </Form>
         )}
      </Formik>
    </div>
  )
}

export default FormikandYup 