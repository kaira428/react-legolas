import { useField } from "formik";
import React from "react";

const CustomSelect = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={id} style={{marginRight: 5}}>
        {`${label} :`}
      </label>
      <select {...field} {...props}>
        {props.children}
      </select>
      {meta.touched && meta.error ? (
        <p style={{ color: "red" }}>{meta.error}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomSelect;
