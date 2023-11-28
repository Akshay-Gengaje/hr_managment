import { createContext, useContext, useState } from "react";

// user context used for to check routes and conditionaly render this in future for complex app we can use Redux toolkit
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState("user");
  return (
    <UserContext.Provider
      value={{
        isAuth,
        setIsAuth,
        role,
        setRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const userCtx = useContext(UserContext);
  if (!userCtx) throw new Error("useUser must be used within a UserProvider");
  return userCtx;
};

export { UserProvider, useUser };
