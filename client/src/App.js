import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Home from "./components/core/Home";
import Profile from "./components/user/Profile";
import Edit from "./components/user/Edit";
import ChangePassword from "./components/user/ChangePassword";
import AddTournament from "./components/tournaments/AddTournament";
import SingleTournament from "./components/tournaments/SingleTournament";
import MyTournaments from "./components/tournaments/MyTournaments";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mytournaments" element={<MyTournaments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<Edit />} />
          <Route path="/profile/password" element={<ChangePassword />} />
          <Route path="/newtournament" element={<AddTournament />} />
          <Route path="/tournaments/:uniqueId" element={<SingleTournament />} />
        </Routes>
      </Router>
    </>
  );
}
