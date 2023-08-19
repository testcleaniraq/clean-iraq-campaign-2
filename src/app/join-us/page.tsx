"use client";
import React from "react";
import bgimg from "./girl.jpeg";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cities } from "@/global/utils/cities";
import usePostForm from "../campaigns/components/usePostForm";
import { FaEnvelope, FaPhone, FaPhoneAlt } from 'react-icons/fa';

export interface IJoinFormData {
 name: string;
  age: number | undefined; 
  personalNumber: string;
  telegram: string;
  msg: string;
  gender: string;
  job: string;
  governorate: string;
}
const jobs=["طالب","موضف","باحث عن عمل","اخرى"]
const gender=["ذكر","انثى"]


function page() {
      const { loading, error, success, submitForm } = usePostForm();
    const handleSubmit = async (values: IJoinFormData) => {
    const formData: IJoinFormData = {
  name: values.name,
    age: values.age,
    personalNumber: values.personalNumber,
    telegram: values.telegram,
    msg: values.msg,
    gender: values.gender,
    job: values.job,
    governorate: values.governorate,
    };
    await submitForm({formdata:formData,path:'sdsdfsdfs'});
  };
    const customInputStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    width:"100%",
    border:"none"

  };

  const initialValues = {
   name: '',
    age: undefined, 
    personalNumber: '',
    telegram: '',
    msg: '',
    gender: '',
    job: '',
    governorate: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    age: Yup.string().required("العمر مطلوب"),
    personalNumber: Yup.string().required("الرقم الشخصي مطلوب"),
    telegram: Yup.string().required("معرف التلكرام مطلوب"),
    gender: Yup.string().required("الجنس مطلوب"),
    job: Yup.string().required("المهنة مطلوبة"),
    governorate: Yup.string().required("المحافظة مطلوبة"),
  });


  return (
      <div className="w-screen h-fit overflow-hidden my-20">
        <div className="flex flex-row justify-between items-center  rounded-2xl overflow-hidden bg-black md:bg-nutral mx-auto w-[90%] h-fit md:h-screen">
          <ImageSection/>
        <div className="w-full  mx-auto ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className=" relative flex flex-col items-center gap-10 justify-center w-full p-10 text-white md:text-gray1">
            <div className=" md:hidden w-full h-full absolute top-0 left-0">
            <Image
              src={bgimg}
              alt=""
              className="object-cover opacity-10 aspect-auto h-full"
            />
          </div>

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
            <div className="flex flex-col w-full items-end">
              <label htmlFor="job" className=" text-sm mb-2">
               المهنة
              </label>
              <div className="w-full bg-transparent b ">
            <Field
              as="select"
              name="job"
                className="text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-full"
            >
            <option disabled={true} value="">اختر</option>
            {jobs.map((job)=> (<option key={job} value={job}>{job}</option>))}</Field>
            <ErrorMessage name="job" component="div" />
              </div>
            </div>
            <div className="flex flex-col w-full items-end">
              <label htmlFor="gender" className=" text-sm mb-2">
               الجنس
              </label>
              <div className="w-full bg-transparent b ">
            <Field
              as="select"
              name="gender"
              id="gender"
                className="text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-full"
            >
            <option disabled={true} value="">اختر</option>
            {gender.map((item)=> (<option key={item} value={item}>{item}</option>))}</Field>
            <ErrorMessage name="gender" component="div" />
              </div>
            </div>
          </div>



          <div className="flex flex-col md:flex-row gap-10 items-center w-full">
            <div className="flex flex-col w-full items-end">
                    <label htmlFor="governorate" className="mb-2 text-sm">
                    المحافظة{" "}
                  </label>
                  <Field
                    name="governorate"
                    id="governorate"
                    as="select"
                    className="w-full text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md"
                  >
                     <option disabled={true} value="">اختر</option>
                    {cities.map((city)=> (<option key={city} value={city}>{city}</option>))}
                  </Field>

            <ErrorMessage name="governorate" component="div" />
              <p className="my-10 text-xs text-gray4 md:text-gray2 text-right">
                    المحافظة الي راح تشارك بتنظيفها   (مو شرط نفسها
                    محافظة السكن)
                  </p>
              </div>
            </div>
         <button
              type="submit"
              disabled={loading}
              className="bg-secondary text-light font-bold px-2 md:px-4 rounded-md h-fit my-auto py-1 text-md md:text-lg w-fit ">
              {loading?"...جاري الارسال":"ارسل"}
            </button>         
            </Form>
          </Formik>
        </div>
        </div>
    </div>
  );
}
  const renderErrorMessage = (errormsg: string) => (
    <div className="flex flex-row items-center justify-center border-2 border-gray-400 border-opacity-50 rounded-3xl ">
      <span className="mx-2 bg-black">{errormsg}</span>
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

export default page;


export const ImageSection = () => {
  return (
    <div className="hidden md:block w-full  h-full">
          <div className="relative w-full h-full ">
          <div className="flex h-full bg-black absolute top-0 left-0">
            <Image
              src={bgimg}
              alt=""
              className="object-cover opacity-40 aspect-auto"
            />
          </div>
          <div className="absolute top-0 left-0 flex flex-col items-end justify-around w-full h-full p-4 words text-overlay">
        <p className=" text-2xl font-normal text-right text-white px-4 py-2 bg-transparent border-light border-[1px] rounded rounded-tl-3xl">
                خليك ويانا
              </p>
        <div className=" absolute bottom-10 left-4 flex flex-col gap-2 items-start justify-between socials opacity-100 text-opacity-100">
                  <span className="flex items-center gap-4 text-white"><FaEnvelope /><p> email@gmail.com</p></span>
                  <span className="flex items-center gap-4 text-white"><FaPhoneAlt /><p> +964 123 456 789</p></span>
                </div>
            <div className="flex">
              <div className="w-1/5 qr"></div>
            </div>
          </div>

        </div>
    </div>
  )
}


{/* <div className="flex flex-row-reverse items-center justify-center my-6 mb-12 content">
            <div className="lg:w-1/2">
              <h1 className="text-2xl font-bold text-right">
                {" "}
                اكتب المعلومات المطلوبة
              </h1>
              <p className="text-right">
                <span className="text-right text-blue-400">ملاحظة</span> اذا ما
                تحب تشاركنا معلوماتك، ممكن تحضر بدون ما تملي الاستمارة،{" "}
                <span className="text-right text-blue-400">
                  بس ما راح تحصل على اي وحدة من مطبوعات الحملة
                </span>{" "}
                (مثلا تيشيرت، مطارة مي، ميدالية، وغيرها)
              </p>
            </div>
            <div className="w-1/2"></div>
          </div> */}