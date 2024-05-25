import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  console.log(user);
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default RequireAuth;
