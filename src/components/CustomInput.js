import { Field, useField } from 'formik'
import React from 'react'

const CustomInput = (props) => {
    const [field, meta] = useField(props);
   
  return (
    <>
    <Field {...props}/>
    {meta.touched && meta.error ? <p style={{color: "red"}}>{meta.error}</p> : ""}
   </>
  )
}

export default CustomInput