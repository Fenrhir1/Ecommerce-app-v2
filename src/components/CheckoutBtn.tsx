import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { ContextEcommerce } from "../context/Context";
import { NavLink } from "react-router-dom";

export const CheckoutBtn = () => {
  const { checkout, setCheckout } = useContext(ContextEcommerce);

  return (
    <NavLink to={`/checkout`}>
      <Button sx={{ color: "#F51A28" }}>Checkout</Button>
    </NavLink>
  );
};
