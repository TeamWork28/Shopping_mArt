import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeliveryInformation from "../components/DeliveryInformation";

export default function Checkout() {
  return (
    <Box sx={{ backgroundColor: "#f5f6f8", minHeight: "100vh", py: 5 }}>
      {/* CENTER CONTAINER */}
      <Box sx={{ maxWidth: 1000, mx: "auto", px: 3 }}>

        {/* HEADER */}
        <Box display="flex" alignItems="center" mb={4}>
          <IconButton sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" fontWeight={700}>
            Checkout
          </Typography>
        </Box>

        {/* DELIVERY INFO */}
        <DeliveryInformation />

        {/* PAYMENT */}
        <Typography variant="h6" fontWeight={600} mt={5} mb={2}>
          Payment Method
        </Typography>

        <Paper sx={cardStyle}>
          <Box display="flex" gap={2}>
            <Button variant="outlined" sx={paymentBtn}>
              Credit Card
            </Button>
            <Button variant="outlined" sx={paymentBtn}>
              UPI
            </Button>
            <Button variant="outlined" sx={paymentBtn}>
              Cash
            </Button>
          </Box>
        </Paper>

        {/* ORDER SUMMARY TITLE */}
        <Typography variant="h6" fontWeight={600} mt={6}>
          Order Summary
        </Typography>

      </Box>
    </Box>
  );
}

/* ===== STYLES ===== */

const cardStyle = {
  p: 4,
  borderRadius: 3,
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
};

const paymentBtn = {
  flex: 1,
  borderRadius: 2,
  textTransform: "none",
};
