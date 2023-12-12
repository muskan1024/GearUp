import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const ProductDetails = (props) => {
  const history = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product details from the API using the 'id' parameter from the URL
    axios
      .get(`http://localhost:3002/api/v1/seller/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]); // Use 'id' as the dependency for the useEffect

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleBuyClick = () => {  
    history(`/product/${id}/orderdetails`, { state: { product: product, quantity: quantity  } });
  };

  return (
    <Grid container padding={2} marginTop={5} spacing={2}>
      <Grid container xs={12} height={500} justifyContent={"center"}>
        <Grid item xs={4} marginRight={5}>
          <img src={product.imageURL} alt="Product Image" height={400} width={"auto"} style={{maxWidth: 500}}/>
        </Grid>
        <Grid item xs={6}>
              <Grid>
              <Typography variant="h5" component="div" mb={3}>
                {product.prodName}
                <Button
                  sx={{ float: "right", borderRadius: 20 }}
                  variant="contained"
                >
                  available Quantity: {product.availableItems}
                </Button>
              </Typography>
              <Typography mb={3}>
                Category:{" "}
                <p style={{ display: "inline", fontWeight: "bold" }}>
                  {product.category}
                </p>
              </Typography>
              <Typography mb={3}>{product.description}</Typography>
              <Typography mb={3} variant="h5" color={"red"}>₹{product.price}</Typography>
              <TextField
                label="Enter Quantity"
                required
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                sx={{marginBottom: 3}} 
              />
              {/* <Link to="/orderdetails"> */}
              <Button variant="contained" sx={{display: "block"}} onClick={handleBuyClick} >Place Order</Button>
              {/* </Link> */}
              {/* <CreateOrder product={product} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;