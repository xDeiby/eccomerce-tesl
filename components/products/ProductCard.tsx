import React, { FC, useMemo, useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Link,
} from "@mui/material";
import { IProduct } from "../../interfaces";
import NextLink from "next/link";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return `products/${isHovered ? product.images[1] : product.images[0]}`;
  }, [product, isHovered]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NextLink href={`/product/slug`} passHref>
        <Link>
          <Card>
            <CardActionArea>
              <CardMedia
                className="fadeIn"
                component="img"
                image={productImage}
                alt={product.title}
              />
            </CardActionArea>
          </Card>
        </Link>
      </NextLink>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  );
};
