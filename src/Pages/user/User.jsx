import { TextField } from "@mui/material";
import Content from "../../components/content/Content";
import { useEffect, useState } from "react";
import { getUserProfile } from "../../services/User";

const User = () => {
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    employeeId: "",
    email: "",
  });
  useEffect(() => {
    fetchUserDetails();
  }, []);

  async function fetchUserDetails() {
    const res = await getUserProfile(localStorage.getItem("uid"));
    setUser(res);
  }
  return (
    <Content className="text-gray-500 mr-2 md:w-fit md:m-auto md:mt-10">
      <h1 className="uppercase text-xl font-semibold">User Profile</h1>
      <div>
        <div className="bg-gray-400  h-[1px] w-full my-2 rounded-xl"></div>
        <p className="my-4 md:px-5">Employee Full Name</p>

        <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-20 md:ml-9">
          <TextField
            color="warning"
            label="First Name"
            name="firstName"
            size="small"
            required
            disabled
            value={user.firstName}
          />
          <TextField
            color="warning"
            label="Middle Name"
            name="middleName"
            size="small"
            value={user.middleName}
            required
            disabled
          />
          <TextField
            color="warning"
            label="Last Name"
            name="lastName"
            size="small"
            value={user.lastName}
            required
            disabled
          />
        </div>

        <p className="my-4 md:px-5 ">Employee Details</p>
        <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-20 md:ml-9">
          <TextField
            color="warning"
            label="Employee Id"
            size="small"
            name="employeeId"
            required
            value={user.employeeId}
            disabled
          />
          <TextField
            color="warning"
            label="Email Address"
            size="small"
            name="email"
            required
            value={user.email}
            disabled
          />
          <TextField
            color="warning"
            label="Role"
            size="small"
            name="role"
            required
            value={String(user.role).toUpperCase()}
            disabled
          />
        </div>
      </div>
    </Content>
  );
};

export default User;
