"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the styles
import usePostForm from "@/app/campaigns/components/usePostForm";

export interface IContactFormData {
  name: string;
  age: number | undefined;
  personalNumber: string;
  telegram: string;
  msg: string;
}

function MyForm() {
    const { loading, error, success, submitForm } = usePostForm();
    const handleSubmit = async (values: IContactFormData) => {
    const formData: IContactFormData = {
     name:values.name,
    age: values.age,
    personalNumber: values.personalNumber,
    telegram: values.telegram,
    msg: values.msg,
    };
    await submitForm({formdata:formData,path:'https://sheetdb.io/api/v1/6zlqet0adtd7e'});
  };
    const customInputStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    width:"100%",
    border:"none"
    // borderBottom:"1 solid gray"

  };

  const initialValues = {
    name: '',
    age: undefined,
    personalNumber: '',
    telegram: '',
    msg: '',
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
     msg: Yup.string().required("يرجى كتابة الرسالة"),
    //  personalNumber:Yup.number().required("يرجى كتابة رقم الهاتف")
    
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col items-center w-full gap-10 p-16 bg-nutral rounded-2xl ">
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="flex flex-col w-full items-end">
              <label htmlFor="age" className="text-sm">
                العمر
              </label>
              <Field
                name="age"
                type="number"
                id="age"
                className=" text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-full"
              />
              <ErrorMessage name="age" render={renderErrorMessage} />
            </div>
            <div className="flex flex-col w-full items-end">
              <label htmlFor="name" className="text-sm">
                الاسم
              </label>
              <Field
                name="name"
                type="text"
                id="name"
                className=" text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-full"
              />
              <ErrorMessage name="name" render={renderErrorMessage} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center w-full">
            <div className="flex flex-col w-full items-end">
              <label htmlFor="personalNumber" className=" text-sm">
                رقم الهاتف 
              </label>
              <div className="w-full bg-transparent border-b-2 border-gray-400 border-opacity-50  ">
          <Field
            name="personalNumber"
            render={({ field, form }:{field:any,form:any}) => (
              <PhoneInput
                inputStyle={customInputStyle}
                country="iq"
                value={field.value}
                onChange={(value) => form.setFieldValue('personalNumber', value)}
              />
            )}
          />
          <ErrorMessage name="personalNumber" component="div" />
              </div>
            </div>
            <div className="flex flex-col w-full items-end ">
             <label htmlFor="telegram" className="text-sm">
                معرف التلكرام
              </label>
              <Field
                name="telegram"
                type="text"
                id="telegram"
                className="text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-full"
              />
              <ErrorMessage name="telegram" render={renderErrorMessage} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center w-full">
            <div className="flex flex-col w-full items-end ">
             <label htmlFor="msg" className="text-sm">
                رسالتك
              </label>
              <Field
                name="msg"
                type="textarea"
                rows={3}
                as="textarea"
                id="msg"
                className="text-right transition-shadow duration-300 bg-transparent border-2 rounded-lg border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-full"
              />
              <ErrorMessage name="msg" render={renderErrorMessage} />
              </div>
          </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-secondary text-light font-bold px-2 md:px-4 rounded-md h-fit my-auto py-1 text-md md:text-lg w-fit ">
              {loading?"...جاري الارسال":"ارسل"}
            </button>        </Form>
      </Formik>
    </div>
  );
}
const renderErrorMessage = (errormsg: string) => (
    <div className="flex flex-row items-center justify-center  py-4">
      <span className="mx-2 text-sm text-gray2">{errormsg}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-red-400 text-sm"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    </div>
  );

export default MyForm;
