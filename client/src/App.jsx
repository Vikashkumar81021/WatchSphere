import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoutes from "./components/routes/PrivateRoutes";
import ForgotPassword from "./pages/Auth/Frogot-password"; // Correct the typo here
import AdminRoute from "./components/routes/Adminroute";
import AdminDashboard from "./pages/admin/Admindashboard"; // Ensure this matches your component and file

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Private Routes for user dashboard */}
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route path="" element={<Dashboard />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
