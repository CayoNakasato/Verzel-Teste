import { Route, Routes } from "react-router-dom";
import { MainContainer } from "../pages/Home";
import { LoginPage } from "../pages/Login";

export const Router = () => {
  return (
    <Routes>
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainContainer />} />
    </Routes>
  );
};
