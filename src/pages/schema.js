import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(4, "must enter more than 4 characters")
    .required("Product title is required"),
 
});
