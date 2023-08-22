import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup-signin/Signup";
import Signin from "./pages/signup-signin/Signin";
import "./App.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-admin" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<h1> Sagara</h1>} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
