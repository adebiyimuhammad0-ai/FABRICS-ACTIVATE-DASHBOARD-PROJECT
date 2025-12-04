import React from "react";
import { Card, CardContent, CardActions, Button, Typography, Box, Avatar } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ProductCard({ product }) {
  return (
    <Card className="product-card" elevation={6}>
      <Box sx={{ position: "relative" }}>
        <img className="product-image" src={product.img} alt={product.title} />
        <Box sx={{ position: "absolute", top: 8, right: 8 }}>
          <Avatar sx={{ width: 34, height: 34, bgcolor: "rgba(255,255,255,0.9)" }}>
            <FavoriteBorderIcon color="action" />
          </Avatar>
        </Box>
      </Box>

      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{product.title}</Typography>
          <Typography className="muted">{product.price}</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <Box sx={{ display: "flex", gap: -8 }}>
            {/* small avatars to show team */}
            <Avatar sx={{ width: 26, height: 26, fontSize: 12 }}>A</Avatar>
            <Avatar sx={{ width: 26, height: 26, fontSize: 12 }}>B</Avatar>
            <Avatar sx={{ width: 26, height: 26, fontSize: 12 }}>C</Avatar>
          </Box>
          <Typography className="muted small" sx={{ ml: 1 }}>{product.stock} units in stock</Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button fullWidth variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  );
}