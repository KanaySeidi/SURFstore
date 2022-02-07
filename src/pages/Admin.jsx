import React from "react";
import { Link } from "react-router-dom";
import AdminPanel from "../components/AdminPanel";
import { Button } from "@mui/material";

const Admin = () => {
  return (
    <div className="admin-container">
      <Link to="/admin/add">
        <Button variant="contained">Внести продукт</Button>
      </Link>
      <AdminPanel />
    </div>
  );
};

export default Admin;
