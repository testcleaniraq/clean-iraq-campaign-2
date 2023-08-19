"use client";
import React from "react";
import bgimg from "./girl.jpeg";
import letter from "./letter.png";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import flags from "react-phone-number-input/flags";
import "react-phone-input-2/lib/style.css"; // Import the styles

function page() {
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
    gender: "",
    job: "",
    governorate: "",
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
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="">
      <div className=" h-screen flex justify-center items-center overflow-hidden m-10 lg:m-20 rounded-2xl bg-[#f3f7f5]">
        <div className="relative hidden w-1/3 h-full lg:flex">
          <div className="absolute top-0 left-0 flex flex-col items-end justify-around w-full h-full p-4 words text-overlay">
            <div className="flex w-full">
              <div className="w-1/2"></div>
              <h1 className="w-1/2 mb-4 text-2xl font-bold text-right text-white">
                خليك ويانا
              </h1>
            </div>
            <div className="flex w-full">
              <div className="w-1/2">
                <div className="flex flex-col items-start justify-between socials">
                  <p className="text-white">email@gmail.com</p>
                  <p className="text-white"> +964 123 456 789</p>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/5 qr"></div>
            </div>
          </div>
          <div className="flex h-full bg-black ">
            <Image
              src={bgimg}
              alt=""
              className="object-cover opacity-50 aspect-auto"
            />
          </div>
        </div>

        <div className="w-2/3 h-full p-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center w-full m-5 rOne lg:flex-row">
                <div className="flex flex-col items-end justify-center w-full max-w-md">
                  <label htmlFor="input1" className="mb-2 text-sm">
                    الاسم
                  </label>
                  <Field
                    name="name"
                    type="text"
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
                  <div className="bg-transparent border-2 border-gray-400 border-opacity-50 rounded-lg w-72 lg:w-96 ">
                    <PhoneInput
                      country={"iq"}
                      value={initialValues.personalNumber}
                      onChange={(value) => {
                        initialValues.personalNumber = value;
                      }}
                    />
                  </div>

                  {/* <Field
                    name="personalNumber"
                    type="text"
                    className="m-5 text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-72 lg:w-96"
                  /> */}
                  <ErrorMessage
                    name="personalNumber"
                    render={renderErrorMessage}
                  />
                </div>
                <div className="flex flex-col items-end justify-center w-full max-w-md">
                  <label htmlFor="input2" className="mb-2 text-sm">
                    معرف التلكرام
                  </label>
                  <Field
                    name="telegram"
                    type="text"
                    className="m-5 text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-72 lg:w-96"
                  />
                  <ErrorMessage name="telegram" render={renderErrorMessage} />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full m-5 rThree lg:flex-row">
                <div className="flex flex-col items-end justify-center w-full max-w-md">
                  <label htmlFor="input1" className="mb-2 text-sm">
                    الجنس
                  </label>
                  <Field
                    as="select"
                    name="gender"
                    className="m-5 text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-72 lg:w-96"
                  >
                    <option disabled value="">
                      اختر
                    </option>
                    <option value="male">ذكر</option>
                    <option value="female">انثى</option>
                  </Field>
                </div>
                <div className="flex flex-col items-end justify-center w-full max-w-md">
                  <label htmlFor="input2" className="mb-2 text-sm">
                    المهنة{" "}
                  </label>
                  <Field
                    name="job"
                    as="select"
                    className="m-5 text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-72 lg:w-96"
                  >
                    <option disabled value="">
                      اختر
                    </option>
                    <option value="student">طالب</option>
                    <option value="employee">موظف</option>
                    <option value="unemployed">عاطل عن العمل</option>
                    <option value="other">اخرى</option>
                  </Field>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full m-5 rThree lg:flex-row">
                <div className="flex flex-col items-end justify-center w-full max-w-md"></div>
                <div className="flex flex-col items-end justify-center w-full max-w-md">
                  <p className="my-10 text-xs text-right">
                    المحافظة الي راح تشارك بتنظيفها هذا الاسبوع (مو شرط نفسها
                    محافظة السكن)
                  </p>
                  <label htmlFor="input2" className="mb-2 text-sm">
                    المحافظة{" "}
                  </label>
                  <Field
                    name="governorate"
                    as="select"
                    className="m-5 text-right transition-shadow duration-300 bg-transparent border-b-2 border-gray-400 border-opacity-50 focus:border-black focus:outline-none focus:shadow-md w-72 lg:w-96"
                  >
                    <option disabled value="">
                      اختر
                    </option>
                    <option value="Baghdad">بغداد</option>
                    <option value="Erbil">اربيل</option>
                    <option value="Anbar">انبار</option>
                    <option value="Babylon">بابل</option>
                    <option value="Basra">بصرة</option>
                    <option value="Duhoq">دهوك</option>
                    <option value="Diyala">ديالى</option>
                    <option value="Qadisiyyah">قادسية</option>
                    <option value="Dhi Qar">ذي قار</option>
                    <option value="Sulaymaniyah">سليمانية</option>
                    <option value="Salah ad Din">صلاح الدين</option>
                    <option value="Kirkuk">كركوك</option>
                    <option value="Karbala">كربلاء</option>
                    <option value="Maysan">ميسان</option>
                    <option value="Muthanna">مثنى</option>
                    <option value="Najaf">نجف</option>
                    <option value="Ninawa">نينوى</option>
                    <option value="Wasit">واسط</option>
                  </Field>
                  <button
                  type="submit"
                  className="w-40 px-2 py-1 my-auto mt-5 text-lg font-bold rounded-lg bg-secondary text-light h-14"
                >
                  أرسل
                </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                
              </div>
            </Form>
          </Formik>
          
        </div>
      </div>
    </div>
  );
}

export default page;



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