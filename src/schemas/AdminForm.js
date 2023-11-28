// These is schema to verify admin user creation.

import * as yup from "yup";

const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const adminFormSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  middleName: yup.string(),
  lastName: yup.string().required("Last Name is required"),
  employeeId: yup
    .number()
    .positive("Employee ID must be a positive number")
    .integer("Employee ID must be an integer")
    .required("Employee ID is required")
    .max(999999, "Employee ID must not exceed 6 digits"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      passwordRule,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});
