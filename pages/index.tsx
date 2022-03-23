import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layout";
import { ProductList } from "../components/products";
import { initialData } from "../database/products";
import { IProduct } from "../interfaces";

const HomePage: NextPage = () => {
  return (
    <ShopLayout
      title="TesloShop - Home"
      pageDescription="Encuentra los mejores productos de Teslo aquí"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <ProductList products={initialData.products as IProduct[]} />
    </ShopLayout>
  );
};

export default HomePage;
