import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export const SProductCard = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="h-[420px]">
        <div>
          <img src={product.imageURL} className="object-cover h-60 mx-auto" />
        </div>
        <CardContent>
          <Typography sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }} variant="h5" component="div">
            {product.prodName}
          </Typography>
          <Typography variant="h6" component="div">
            ₹{product.price}
          </Typography>
          <Typography
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            color="text.secondary"
          >
            {product.description}
          </Typography>
          <div className="font-bold">
            Manufacturer:
            <Typography className="" sx={{
              textOverflow: "ellipsis",
              // overflow: "hidden",
              whiteSpace: "nowrap",
            }} color="text.secondary">
              {product.manufacturer}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
