import React from 'react'
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import {Link} from 'react-router-dom'

export const SProductCard = ({ product }) => {
  return (
    <Grid item xs="3">
      <Card className='h-[420px]'>
        <Grid container alignItems={"center"} justifyContent="center">
          <img src={product.imageURL} className='w-fit' />
        </Grid>
        <CardContent>
          <Typography variant="h5" component="div">
            {product.prodName}
          </Typography>
          <Typography variant="h6" component="div">
            ₹{product.price}
          </Typography>
          <Typography
            sx={{ overflow: "auto", }}
            color="text.secondary"
          >
            {product.description}
          </Typography>
          <Typography>
          Manufacturer: 
          </Typography>
          <Typography
            sx={{ overflow: "auto",  }}
            color="text.secondary"
          >
            {product.manufacturer}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Link to={`/product/${product._id}`}>
            <Button variant="contained">Buy</Button>
          </Link>
        </CardActions> */}
      </Card>
    </Grid>
  )
}
