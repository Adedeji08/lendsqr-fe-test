import React from "react";
import "./App.css";
import Login from "./view/auth/Login";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux/es/exports";
import Dashboard from "./view/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./view/users/Users";
import UserDetails from "./view/users/UserDetails";

function App() {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path='userdetails' element={<UserDetails />} />
          </Routes>
        </Layout>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
