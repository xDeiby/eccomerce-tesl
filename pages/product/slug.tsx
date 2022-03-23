import React from "react";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layout";
import { initialData } from "../../database/products";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";

const initialProduct = initialData.products[0];
const ProductPage = () => {
  return (
    <ShopLayout
      title={initialProduct.title}
      pageDescription={initialProduct.description}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={initialProduct.images} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {initialProduct.title}
            </Typography>

            <Typography variant="subtitle1" component="h2">
              ${initialProduct.price}
            </Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad:</Typography>
              <ItemCounter />
              <SizeSelector sizes={initialProduct.sizes} />
            </Box>

            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>

            {/* <Chip label="No hay disponibles" color="error" variant="outlined" /> */}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">
                {initialProduct.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductPage;
