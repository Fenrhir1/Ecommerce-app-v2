import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProductRender } from "./components/Products";
import { ContextEcommerce, ContextEcommerceProvider } from "./context/Context";
import { CheckoutPage } from "./components/ChechoutPage";
import { useContext } from "react";

function EcommerceApp() {
  const isCheckoutSet = !localStorage.getItem("checkout");

  return (
    <ContextEcommerceProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              isCheckoutSet ? <ProductRender /> : <Navigate to="/" replace />
            }
          />
        </Routes>
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </ContextEcommerceProvider>
  );
}

export default EcommerceApp;
