import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { ContextEcommerce } from "../context/Context";

export const ProductRender = () => {
  const { addTocart, products, fetchProducts } = useContext(ContextEcommerce);

  useEffect(() => {
    fetchProducts();
  }, []);
  if (products.length === 0) {
    return (
      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",

          margin: "400px",
          borderRadius: "10px",
        }}
      >
        <Typography>Loading...</Typography>;
      </Container>
    );
  } else {
    return (
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={product.image}
                  title="green iguana"
                />
                <CardContent sx={{ background: "#1A1B21", color: "#F51A28" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="#F51A28">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ background: "#1A1B21", color: "#F51A28" }}>
                  <Button
                    onClick={() => {
                      addTocart(product);
                    }}
                    size="small"
                  >
                    Aggiungi al carrello
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
};
