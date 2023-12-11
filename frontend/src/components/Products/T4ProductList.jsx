import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";

export const T4ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/v1/seller/products/top-5")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Grid container spacing={2} padding={2}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Grid>
    </>
  );
};
