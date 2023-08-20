import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; 
import React from 'react'
import { ErrorMessage, Field } from "formik";

const PhoneNumberInput = ({text,name}:{text:string,name:string}) => {
    const styles = {
        container:{
          width:"100%", 

    padding:'0',
        },
  phone_container: {
    background: 'transparent',
    color:"gray",
    borderWidth: '1px',
    borderColor: '#e9edea',
    borderStyle: 'solid',
    with:'100%',

    
    
  },
};

  return (
          <div className="flex flex-col w-full items-center-end  bg-transparent">
              <label htmlFor={name} className=" text-sm mb-2">
               {text}
              </label>

            <Field
              name={name}
              render={({ field, form }:{field:any,form:any}) => (
                <PhoneInput
                buttonStyle={styles.phone_container}
                // containerClass="phone_container"
                inputClass="phone_input"
                inputStyle={styles.phone_container}
                  country="iq"
                  value={field.value}
                  containerStyle={styles.container} 
                  onChange={(value) => form.setFieldValue({name}, value)}
                />
              )}
            />
            <ErrorMessage name={name} component="div" />
              </div>
  )
}

export default PhoneNumberInput