import { Dashboard } from "../../components/Dashboard";
import { MainContainer } from "../Home";
import { useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Spinner } from "@chakra-ui/react";

interface DecodedToken extends JwtPayload {
  admin: boolean;
}

export const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const token = localStorage.getItem("@Token");
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        setIsAdmin(decodedToken.admin);
        setLoading(false);
      } catch (error) {
        console.error("Failed to decode token:", error);
        setLoading(false);
      }
    }
  }, [token]);
  if (loading) {
    return <Spinner />;
  }
  return isAdmin ? <Dashboard /> : <MainContainer />;
};
