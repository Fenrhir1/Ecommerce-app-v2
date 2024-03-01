import { useContext } from "react";
import { ContextEcommerce } from "../context/Context";
import { Box, Divider } from "@mui/material";

export function CartItem() {
  const { removeFromCart, cart } = useContext(ContextEcommerce);

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
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img
            style={{ height: "100px", width: "50px" }}
            src={item.image}
            alt={item.title}
          />
          <p>Quantità:{item.qty}</p>
          <p>Prezzo{item.price}$</p>

          <button
            onClick={() => {
              removeFromCart(item);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </Box>
  );
}
