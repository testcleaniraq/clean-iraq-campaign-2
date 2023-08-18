"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import letter from "../letter.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import flags from "react-phone-number-input/flags";
import "react-phone-input-2/lib/style.css"; // Import the styles

function MyForm() {
  const renderErrorMessage = (errormsg: string) => (
    <div className="flex flex-row items-center justify-center border-2 border-gray-400 border-opacity-50 rounded-lg">
      <span className="mx-2">{errormsg}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-red-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    </div>
  );
  const initialValues = {
    name: "",
    age: 0,
    personalNumber: "",
    telegram: "",
    msg: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    telegram: Yup.string().required("معرف التلكرام مطلوب"),
    age: Yup.number()
    .required('العمر مطلوب')
    .positive('يجب ان يكزن العمر اكبر من صفر')
    .integer('يجب ان يكون العمر عدد صحيح')
    .min(0, 'يجب ان يكون العمر اكبر من صفر')
    .max(150, 'يجب ان يكون العمر اقل من 150'),
    
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col items-center justify-center w-full pr-16 rounded-2xl bg-[#f3f7f5]">
          <div className="flex flex-col items-center justify-center w-full m-5 rOne lg:flex-row">
            <div className="flex flex-col items-end justify-center w-full max-w-md">
              <label htmlFor="input1" className="mb-2 text-sm">
                الاسم
              </label>
              <Field
                name="name"
                type="text"
                id="input1"
                className="m-5 text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-72 lg:w-96"
              />
              <ErrorMessage name="name" render={renderErrorMessage} />
            </div>
            <div className="flex flex-col items-end justify-center w-full max-w-md">
              <label htmlFor="input2" className="mb-2 text-sm">
                العمر
              </label>
              <Field
                name="age"
                type="number"
                id="input2"
                className="m-5 text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-72 lg:w-96"
              />
              <ErrorMessage name="age" render={renderErrorMessage} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full m-5 rTwo lg:flex-row">
            <div className="flex flex-col items-end justify-center w-full max-w-md">
              <label htmlFor="input1" className="mb-2 text-sm">
                الرقم الشخصي
              </label>
              <div className="mx-10 bg-transparent border-2 border-gray-400 border-opacity-50 rounded-lg w-72 lg:w-96 ">
                <PhoneInput
                  country={"iq"}
                  value={initialValues.personalNumber}
                  onChange={(value) => {
                    initialValues.personalNumber = value;
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-end justify-center w-full max-w-md">
              <label htmlFor="input2" className="mb-2 text-sm">
                معرف التلكرام
              </label>
              <Field
                name="telegram"
                type="text"
                id="input4"
                className="m-5 text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-72 lg:w-96"
              />
              <ErrorMessage name="telegram" render={renderErrorMessage} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-10/12">
            <label htmlFor="msg" className="mb-2 text-sm">
              الرسالة
            </label>
            <Field
              name="msg"
              id="msg"
              className="w-full h-24 p-2 text-right transition-shadow duration-300 bg-transparent border-2 border-gray-400 rounded-lg resize-none focus:outline-none focus:shadow-md"
              placeholder="اكتب رسالتك "
              as="textarea"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <button
              type="submit"
              className="w-24 px-2 py-1 my-auto mt-5 font-bold rounded-lg bg-secondary text-light"
            >
              ارسال
            </button>
            <Image
              src={letter}
              alt=""
              className="mt-20 -rotate-45 w-72 mr-36"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MyForm;
