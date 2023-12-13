import React from "react";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import SignInSide from "./auth/Signin";
import Location from "./components/Location";
import Signup from "./auth/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const gradientBackground = {
    height: "100vh",
    fontFamily: "OCR A Std, monospace",
    backgroundImage:
      "radial-gradient(circle, rgba(225, 151, 235, 0.25) 0%, rgba(239, 181, 237, 0.27) 100%)",
  };
  return (
    <div style={gradientBackground}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/about_us" element={<About />}></Route>
          <Route path="/userlogin" element={<SignInSide />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
