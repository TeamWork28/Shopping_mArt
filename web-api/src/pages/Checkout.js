import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
  Avatar,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

import { getCarts, addCarts } from '../apiService/carts';


export default function Checkout() {
  const [carts, setCarts] = useState([]);


  const subtotal = carts.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = 3.99;
  const total = subtotal + shipping;

  useEffect(() => {
    const loadData = async () => {

      let cartsRaw = await getCarts();
      if (cartsRaw?.data?.items?.length) setCarts(cartsRaw.data.items);
    };
    loadData();
  }, []);


  return (
    <Box >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: 4,
        }}
      >
        {/* LEFT SIDE */}
        <Box sx={{ flex: 2 }}>
          {/* Delivery */}
          <Card sx={{ mb: 4, borderRadius: 3, boxShadow: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                Delivery Information
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField fullWidth label="Full Name" />
                <TextField fullWidth label="Address" />

                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField fullWidth label="City" />
                  <TextField fullWidth label="Zip Code" />
                </Box>

                <TextField fullWidth label="Phone Number" />
              </Box>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                Payment Method
              </Typography>

              <RadioGroup defaultValue="cod">
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label="Credit / Debit Card"
                />
                <FormControlLabel
                  value="upi"
                  control={<Radio />}
                  label="UPI Payment"
                />
              </RadioGroup>

              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: "bold",
                }}
              >
                Place Order
              </Button>
            </CardContent>
          </Card>
        </Box>

        {/* RIGHT SIDE */}
        <Box sx={{ flex: 1 }}>
          <Card sx={{ borderRadius: 3, boxShadow: 5 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                Order Summary
              </Typography>

              {carts.map((item, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Avatar
                        variant="rounded"
                        src={item.product.image}   // or item.image
                        alt={item.product.name}
                        sx={{ width: 60, height: 60 }}
                      />
                      <Box>
                        <Typography fontWeight={500}>
                          {item.product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Qty: {item.quantity}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography fontWeight="bold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Box>

                  {index !== item.product.length - 1 && (
                    <Divider sx={{ mt: 2 }} />
                  )}
                </Box>
              ))}

              <Divider sx={{ my: 3 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography>Subtotal</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography>Shipping</Typography>
                <Typography>${shipping.toFixed(2)}</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" fontWeight="bold">
                  Total
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  ${total.toFixed(2)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}