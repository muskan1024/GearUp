import React from 'react'
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import {Link} from 'react-router-dom'

export const ProductCard = ({ product }) => {
  return (
    <Grid item xs="3">
      <Card className='h-[480px]'>
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
            sx={{textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",}}
            color="text.secondary"
          >
            {product.description}
          </Typography>
          <div className="font-bold">
            Manufacturer: 
            <Typography className="inline-block" sx={{}} color="text.secondary">
              {product.manufacturer}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Link to={`/product/${product._id}`}>
            <Button variant="contained">Buy</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
