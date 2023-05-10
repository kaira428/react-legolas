import * as Yup from "yup";

export const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const traineeDetailsSchema = Yup.object({
    firstName: Yup.string().required("Required").min(2, "First Name must be at least 2 characters long"),
    lastName: Yup.string().required("Required").min(2, "Last Name must be at least 2 characters long"),
    email: Yup.string()
      .required("Required")
      .email("Invalid email address"),
    phone: Yup.string()
      .required("Required")
      .matches(phoneRegExp, "Phone number is invalid"),
  });