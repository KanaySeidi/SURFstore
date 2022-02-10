import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import Edit from "./pages/Edit";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Admin from "./pages/Admin";
import AdminProvider from "./contexts/AdminProvider";
import ClientProvider from "./contexts/ClientProvider";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import AuthProvider from "./contexts/AuthProvider";
import Where from "./pages/Where";
import When from "./pages/When";
import Winter from "./pages/Winter";
import Summer from "./pages/Summer";
import Outumn from "./pages/Outumn";
import Spring from "./pages/Spring";
import Footer from "./components/Footer";
import CheckoutPage from "./pages/CheckoutPage";
import WelcomePage from "./pages/Welcome";

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
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/checkout/welcome" element={<WelcomePage />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/where" element={<Where />} />
              <Route path="/when" element={<When />} />
              <Route path="/when/winter" element={<Winter />} />
              <Route path="/when/summer" element={<Summer />} />
              <Route path="/when/outumn" element={<Outumn />} />
              <Route path="/when/spring" element={<Spring />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AdminProvider>
      </ClientProvider>
    </AuthProvider>
  );
};

export default MyRoutes;
