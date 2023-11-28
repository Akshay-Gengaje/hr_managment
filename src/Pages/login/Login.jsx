import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { signinUser } from "../../services/User";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuth, setRole, role } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };
  const handleSubmit = async () => {
    try {
      if (!email || !password) {
        setError("Enter required fields");
        return;
      }
      setError("");
      setLoading(true);
      const user = await signinUser(email, password);
      console.log(user);
      setIsAuth(user.success);
      setRole(user.role);
      if (user.success) {
        navigate(role === "admin" ? "/admin" : "/user");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-orange-400 h-screen flex justify-center items-center">
      <div className="bg-white  flex flex-col space-y-5 px-20 py-10 rounded-xl">
        <h1 className="text-center text-xl font-bold mb-5 tracking-wider uppercase">
          Login Form
        </h1>
        <TextField
          label="Email Address"
          name="email"
          color="warning"
          required
          value={email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          color="warning"
          type="password"
          required
          value={password}
          onChange={handleChange}
        />
        <span
          className={`text-red-500 text-center ${
            error ? "inline-block" : "hidden"
          }`}
        >
          {error}
        </span>
        <Button
          variant="contained"
          color="warning"
          disabled={loading}
          onClick={() => handleSubmit(email, password)}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
