import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import Appointments from "./pages/Appointments";
import History from "./pages/History";
import SignUp from "./pages/Auth/SignUp";
import DoctorHistory from "./pages/DoctorHistory";
import Vitals from "./pages/Vitals";
import RequireAuth from "./pages/RequireAuth";
import { AuthProvider } from "./pages/AuthProvider";
import UnAuthorized from "./pages/UnAuthorized";
import DoctorLogin from "./pages/Auth/DoctorLogin";
import WelcomeDoctor from "./pages/WelcomeDoctor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/appointments" replace />, // Redirect from "/" to "/appointments"
      },
      {
        path: "appointments",
        element: (
          <RequireAuth>
            <Appointments />
          </RequireAuth>
        ),
      },
      {
        path: "history",
        element: (
          <RequireAuth>
            <History />
          </RequireAuth>
        ),
      },
      {
        path: "vitals",
        element: (
          <RequireAuth>
            <Vitals />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "doctor/:id",
    element: (
      <RequireAuth>
        <DoctorHistory />
      </RequireAuth>
    ),
  },
  {
    path: "un-authorized",
    element: (
      <RequireAuth>
        <UnAuthorized />
      </RequireAuth>
    ),
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "doctor-login",
    element: <DoctorLogin />,
  },
  {
    path: "welcome-doctor",
    element: <WelcomeDoctor />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
