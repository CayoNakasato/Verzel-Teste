import { Route, Routes } from "react-router-dom";
import { MainContainerPage } from "../pages/Home";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { DashboardPage } from "../pages/Dashboard";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<MainContainerPage />} />
    </Routes>
  );
};
