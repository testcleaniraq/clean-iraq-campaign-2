import { ErrorMessage, Field } from 'formik'
import React from 'react'

const DropdownFeild = ({optionsList,text,name}:{optionsList:Array<string>,text:string,name:string}) => {
  return (
            <div className="flex flex-col w-full items-end">
              <label htmlFor={name} className=" text-sm mb-2">
              {text}
              </label>
              <div className="w-full bg-transparent b ">
            <Field
              as="select"
              name={name}
                className=" placeholder:text-gray3 text-gray2 font-normal px-2 py-1 text-right transition-shadow shadow-slate-200 duration-300 bg-transparent border-2 border-gray4 border-opacity-20 focus:border-secondary rounded-md focus:outline-none focus:shadow-md w-full"
            >
            <option disabled={true} value="">اختر</option>
            {optionsList.map((item)=> (<option key={item} value={item}>{item}</option>))}</Field>
            <ErrorMessage name={name} component="div" />
              </div>
            </div>  )
}

export default DropdownFeild