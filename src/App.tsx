import React from "react";
import "./App.css";
import Login from "./view/auth/Login";
import Dashboard from "./view/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./view/users/Users";
import UserDetails from "./view/users/UserDetails";

function App() {
  const user = '';
  return (
    <div>
    {user ? (
      <Login />
    ) : (
      
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path='userdetails' element={<UserDetails />} />
        </Routes>
      </Layout>
    )}
  </div>
  );
}

export default App;
