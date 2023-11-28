import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Content from "../../components/content/Content";

import { useFormik } from "formik";
import { adminFormSchema } from "../../schemas/AdminForm";
import { useState } from "react";
import { signupUser } from "../../services/User";

const AdminPage = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      employeeId: "",
      email: "",
      role: "user",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: adminFormSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setLoading(true);
      signupUser(values);
      resetForm();
      setLoading(false);
    },
  });

  return (
    <Content className="text-gray-500 w-fit m-auto mt-10">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="uppercase text-xl font-semibold">Add Employee</h1>
        <div className="bg-gray-400  h-[1px] w-full my-2 rounded-xl"></div>
        {/* Employee Name  */}
        <p className="my-4 md:px-5">Employee Full Name</p>
        <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-20 md:ml-9">
          <TextField
            color="warning"
            label="First Name"
            name="firstName"
            size="small"
            required
            onChange={formik.handleChange}
            value={formik.values.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            color="warning"
            label="Middle Name"
            name="middleName"
            size="small"
            value={formik.values.middleName}
            onChange={formik.handleChange}
            error={
              formik.touched.middleName && Boolean(formik.errors.middleName)
            }
            helperText={formik.touched.middleName && formik.errors.middleName}
          />
          <TextField
            color="warning"
            label="Last Name"
            size="small"
            name="lastName"
            required
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </div>

        {/* Employee Details  */}
        <p className="my-4 md:px-5 ">Employee Details</p>
        <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-20 md:ml-9">
          <TextField
            color="warning"
            label="Employee Id"
            size="small"
            name="employeeId"
            required
            value={formik.values.employeeId}
            onChange={formik.handleChange}
            error={
              formik.touched.employeeId && Boolean(formik.errors.employeeId)
            }
            helperText={formik.touched.employeeId && formik.errors.employeeId}
          />
          <TextField
            color="warning"
            label="Email Address"
            size="small"
            name="email"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <FormControl>
            <InputLabel id="role" color="warning">
              Role
            </InputLabel>
            <Select
              id="role"
              label="Role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              size="small"
              color="warning"
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"user"}>User</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Employee Credentials  */}
        <p className="my-4 md:px-5">Login Credentials</p>
        <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-20 md:ml-9">
          <TextField
            color="warning"
            label="Username"
            size="small"
            required
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <div>
            <TextField
              color="warning"
              label="Password"
              size="small"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <span className="text-xs text-gray-600 block text-left w-60">
              Password must contain at least: 8 characters, 1 digit, 1 lowercase
              letter, 1 uppercase letter
            </span>
          </div>
          <TextField
            color="warning"
            label="Confirm Password"
            type="password"
            size="small"
            name="confirmPassword"
            required
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </div>

        {/* Submit Button  */}
        <div className="my-4 md:ml-7 ">
          <Button
            color="warning"
            variant="contained"
            type="submit"
            disabled={loading}
          >
            Add Employee
          </Button>
        </div>
      </form>
    </Content>
  );
};

export default AdminPage;
