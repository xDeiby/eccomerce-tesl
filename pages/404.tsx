import React from "react";
import { NextPage } from "next";
import { ShopLayout } from "../components/layout";
import { Box, Typography } from "@mui/material";

const Page404: NextPage = () => {
  return (
    <ShopLayout title="Page Not Found" pageDescription="No content">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography variant="h1" component="h1" fontSize={100} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>No se encontró ninguna página</Typography>
      </Box>
    </ShopLayout>
  );
};

export default Page404;
