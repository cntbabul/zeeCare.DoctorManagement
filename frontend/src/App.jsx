import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "./main.jsx";
import Appointment from "./pages/Appointment.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          { withCredentials: true }
        );
        console.log(response.data.user);

        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser({});
      }
    };
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/appointments" element={<Appointment />} />

          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
        <ToastContainer position="bottom-left" />
      </Router>
    </>
  );
}

export default App;
