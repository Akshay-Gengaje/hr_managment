import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/login/Login";
import AdminPage from "./Pages/admin/AdminPage";

import AppLayout from "./layout/AppLayout";
import User from "./Pages/user/User";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <AppLayout>
        <AdminPage />
      </AppLayout>
    ),
  },
  {
    path: "/user",
    element: (
      <AppLayout>
        <User />
      </AppLayout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
