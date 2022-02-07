import { Container } from "@mui/material";
import React from "react";
import CartPanel from "../components/CartPanel";

const Cart = () => {
  return (
    <div className="cart-container">
      <Container>
        <CartPanel />
      </Container>
    </div>
  );
};

export default Cart;
