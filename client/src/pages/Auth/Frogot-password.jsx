import Layout from "../../components/Layout/Layout";
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const FrogotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [answer, setanswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(
        "http://localhost:5050/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );

      if (resp.data.success) {
        toast.success("Password Reset successfully");

        navigate("/login");
      } else {
        toast.error(resp.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something is error");
    }
  };
  return (
    <Layout>
      <div className="form-container">
        <h1>Reset Password</h1>
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
              type="text"
              value={answer}
              className="form-control"
              id="exampleInputEmai"
              placeholder="Enter your secret favorite Sport"
              onChange={(e) => setanswer(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={newPassword}
              type="password"
              className="form-control"
              placeholder="Enter your New Password"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default FrogotPassword;
