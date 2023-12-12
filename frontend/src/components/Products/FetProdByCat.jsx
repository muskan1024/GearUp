import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductCard } from "./ProductCard";
import { Grid } from "@mui/material";
import NavBar from "../NavBar";

export const FetProdByCat = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3002/api/v1/seller/products/categories/${category}`
      )
      .then((response) => {
        setProducts(response.data);
        console.log(products[0].prodName);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [category]);

  return (
    <>
      <NavBar/>
      <Grid container spacing={2} padding={2}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Grid>
    </>
  );
};
