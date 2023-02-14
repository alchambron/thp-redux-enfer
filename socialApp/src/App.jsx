import { Route, Routes } from "react-router-dom";
import Login from "./Components/header/forms/Login";
import Register from "./Components/header/forms/Register";
import Navbar from "./Components/header/navbar/Navbar";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
