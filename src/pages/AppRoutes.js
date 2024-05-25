import { Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Appointments from "./Appointments";
// import SignUp from "./Auth/SignUp";
import History from "./History";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/appointments" element={<Appointments />} />
      {/* <Route path="/vitals" element={<Vitals />} /> */}
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
