import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/login/Login";
import AdminPage from "./Pages/admin/AdminPage";
import AppLayout from "./layout/AppLayout";
import "react-toastify/dist/ReactToastify.css";
import User from "./Pages/user/User";
import { useUser } from "./context/userContext";

const App = () => {
  const { isAuth, role } = useUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route
          path="/admin"
          element={
            isAuth && role === "admin" ? (
              <AppLayout>
                <AdminPage />
              </AppLayout>
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
        <Route
          path="/user"
          element={
            isAuth ? (
              <AppLayout>
                <User />
              </AppLayout>
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
