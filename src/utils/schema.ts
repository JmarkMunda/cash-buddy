import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email("Email must be valid").required("Required field"),
    password: yup.string().min(8).required("Required field"),
  })
  .required();
