import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../contextAPI/Auth";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../style/AuthStyle.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post("http://localhost:5050/api/v1/auth/login", {
        email,
        password,
      });

      if (resp.data.success) {
        toast.success("User  login successfully");
        setAuth({
          ...auth,
          user: resp.data.user,
          token: resp.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(resp.data));
        navigate(location.state || "/");
      } else {
        toast.error(resp.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something is error");
    }
  };

  return (
    <Layout title={"register"}>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmai1"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={password}
              type="password"
              className="form-control"
              placeholder="Enter your Password"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
