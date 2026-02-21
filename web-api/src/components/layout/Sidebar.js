import React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { text: "Grocery List", icon: <CheckBoxIcon />, active: true, path: "/" },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
        borderRight: "1px solid #e0e0e0",
      }}
    >
      {/* Top Section: Logo + Menu */}
      <Box>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <ShoppingCartIcon sx={{ color: "#2DBE5F", mr: 1 }} />
          <Box component="span" sx={{ fontWeight: "bold", fontSize: 18 }}>
            Grocery Mart
          </Box>
        </Box>

        {/* Menu */}
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              onClick={() => navigate(item.path)}
              sx={{
                mb: 1,
                borderRadius: 2,
                bgcolor: item.active ? "#E6F5EC" : "transparent",
                "&:hover": { bgcolor: item.active ? "#E6F5EC" : "#f5f5f5" },
              }}
            >
              <ListItemIcon sx={{ color: item.active ? "#2DBE5F" : "#000" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: item.active ? "medium" : "regular",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Bottom Section: Checkout Button */}
      <Button
        variant="contained"
        onClick={() => navigate('/checkout')}
        color="success"
        sx={{ borderRadius: 2, textTransform: "none", py: 1.5 }}
        endIcon={<LocalMallIcon />}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default Sidebar;
