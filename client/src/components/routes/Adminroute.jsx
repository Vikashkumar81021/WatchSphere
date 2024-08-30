import Spinner from "../../pages/Spinner";
import { useState, useEffect } from "react";
import { useAuth } from "../../contextAPI/Auth"; // Adjust path if necessary

import axios from "axios";
import { Outlet } from "react-router-dom";

const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth(); // Ensure this hook returns the expected values

  useEffect(() => {
    const authCheck = async () => {
      try {
        if (!auth?.token) {
          setOk(false);
          return;
        }

        const res = await axios.get("/api/v1/auth/admin-auth", {
          headers: {
            Authorization: `Bearer ${auth.token}`, // Ensure the token is correctly passed
          },
        });

        if (res.data && res.data.ok !== undefined) {
          setOk(res.data.ok);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Authorization check failed", error);
        setOk(false);
      }
    };

    authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
};

export default AdminRoute;
