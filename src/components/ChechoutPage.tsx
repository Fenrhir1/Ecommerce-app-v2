import { Box } from "@mui/material";
import { useContext } from "react";
import { ContextEcommerce } from "../context/Context";

export const CheckoutPage = () => {
  const { setCheckout } = useContext(ContextEcommerce);
  setCheckout(false);
  localStorage.removeItem("checkout");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>Checkout</h1>
      <p>Thank you for shopping with us</p>
    </Box>
  );
};
