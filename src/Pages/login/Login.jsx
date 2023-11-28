import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="bg-orange-400 h-screen flex justify-center items-center">
      <div className="bg-white  flex flex-col space-y-5 px-20 py-10 rounded-xl">
        <h1 className="text-center text-xl font-bold mb-5 tracking-wider uppercase">
          Login Form
        </h1>
        <TextField label="Email Address" color="warning" />
        <TextField label="Password" color="warning" />
        <Button variant="contained" color="warning">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
