import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import BlogsPage from "../../pages/BlogsPage";
import Error404Page from "../../pages/Error404Page";
import AuthPage from "../../pages/AuthPage";
import Signup from "../authComponents/SignUp";
import Signin from "../authComponents/Signin";
import AboutPage from "../../pages/Aboutpage";
import ResetPassword from "../authComponents/ResetPassword";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Error 404 Page */}
      <Route path="*" element={<Error404Page />} />

      {/* Redirect to /home when the app is loaded*/}
      <Route path="/" element={<Navigate to="/home" replace={true} />} exact />

      {/* Add your routes here */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/about" element={<AboutPage />} />

      {/* Auth Routes */}
      <Route path="/get-started" element={<AuthPage />}>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
