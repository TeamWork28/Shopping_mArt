import React from "react";
import defaultImg from "../asserts/no_image.png";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function ProductCard({
  name,
  image,
  price,
  oldPrice,
  brand,
}) {
  return (
    <Card
      sx={{
        width: 220,
        borderRadius: 3,
        boxShadow: 2,
        p: 2,
      }}
    >
      {/* Placeholder Image */}
      <CardMedia
        component="img"
        height="90"
        image={image || defaultImg}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultImg;
        }}
        alt={name}
        sx={{
          objectFit: "contain",
          mb: 2,
        }}
      />

      <CardContent sx={{ p: 0 }}>
        <Typography variant="h6" fontWeight={600}>
          {name}
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Typography
            variant="h6"
            sx={{ color: "#0B8A4B", fontWeight: 700 }}
          >
            ${price}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              color: "gray",
            }}
          >
            ${oldPrice}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" mt={1}>
          {brand}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#0B8A4B",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#09733E",
            },
          }}
        >
          Add to Kart
        </Button>
      </CardContent>
    </Card>
  );
}
