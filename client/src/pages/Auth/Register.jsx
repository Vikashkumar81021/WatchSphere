import Layout from "../../components/Layout/Layout";
import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../style/AuthStyle.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setaddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(
        "http://localhost:5050/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );
      console.log(name, email, password, address, answer, phone);

      if (resp.data.success) {
        toast.success("User register successfully");
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
    <Layout title={"register"}>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>
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
            <input
              type="text"
              value={phone}
              className="form-control"
              id="exampleInputEail1"
              placeholder="Enter your Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              className="form-control"
              placeholder="Enter your Address"
              onChange={(e) => setaddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={answer}
              className="form-control"
              placeholder="Enter your favorite sports"
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
