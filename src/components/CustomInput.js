import { Field, useField } from "formik";
import React from "react";

const CustomInput = (props) => {
  const [field, meta] = useField(props);
  // console.log("🚀 ~ file: CustomInput.js:6 ~ CustomInput ~ meta:", meta);
  // console.log("🚀 ~ file: CustomInput.js:6 ~ CustomInput ~ field:", field);

  return (
    <>
      <Field {...field} {...props} />
      {meta.touched && meta.error ? (
        <p style={{ color: "red" }}>{meta.error}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomInput;
