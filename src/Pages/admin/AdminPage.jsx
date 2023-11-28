import { Button, TextField } from "@mui/material";
import Content from "../../components/content/Content";
import { addUser } from "../../services/User";

const AdminPage = () => {
  return (
    <Content className="text-gray-500 w-full">
      <h1 className="uppercase text-xl font-semibold">Add Employee</h1>

      <div className="bg-gray-400  h-[1px] w-full my-2 rounded-xl"></div>
      <p className="my-4 md:px-5">Employee Full Name</p>
      <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-20 md:ml-9">
        <TextField color="warning" label="First Name" size="small" required />
        <TextField color="warning" label="Middle Name" size="small" />
        <TextField color="warning" label="Last Name" size="small" required />
      </div>
      <p className="my-4 md:px-5 ">Employee Id</p>
      <div className="my-4 md:ml-9 md:w-56">
        <TextField
          color="warning"
          label="Employee Id"
          size="small"
          fullWidth
          required
          type="number"
        />
      </div>

      <p className="my-4 md:px-5">Login Credentials</p>
      <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-20 md:ml-9">
        <TextField color="warning" label="Username" size="small" required />
        <TextField color="warning" label="Password" size="small" />
        <TextField
          color="warning"
          label="Confirm Password"
          size="small"
          required
        />
      </div>
      <div className="my-4 md:ml-7 ">
        <Button color="warning" variant="contained" fullWidth onClick={addUser}>
          Add Employee
        </Button>
      </div>
    </Content>
  );
};

export default AdminPage;
