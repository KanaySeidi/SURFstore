import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import Edit from "./pages/Edit";
// import MyNavbar from "./components/MyNavbar";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Admin from "./pages/Admin";
import AdminProvider from "./contexts/AdminProvider";
import ClientProvider from "./contexts/ClientProvider";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import AuthProvider from "./contexts/AuthProvider";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <ClientProvider>
        <AdminProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/add" element={<AddPage />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </ClientProvider>
    </AuthProvider>
  );
};

export default MyRoutes;
