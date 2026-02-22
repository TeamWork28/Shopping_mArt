import React, { useState, useEffect } from "react";
import { Box, TextField, InputAdornment, IconButton, Badge, Typography, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductCard from '../components/ProductCard';
import { getProducts, getCategories } from '../apiService/product';

const GrocerySearchBar = () => {
  const [cartCount, setCartCount] = useState(2); // Example cart items count
  const [selected, setSelected] = useState("All");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const loadData = async () => {
      let categoriesRaw = await getCategories();
      setCategories(['All', ...categoriesRaw.data]);
      syncProduct();
    };

    loadData();
  }, []);

  async function syncProduct(item = 'All') {
    setSelected(item);
    let filter = {};
    if (item && item != 'All') filter["category"] = item;
    let productsRaw = await getProducts(filter);
    setProducts(productsRaw.data);
  }

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={2}
        bgcolor="#f5f5f5"
      >
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: 600, color: 'black' }}>
          Grocery List
        </Typography>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search grocery items..."
          justifyContent="center"
          size="small"
          sx={{ flexGrow: 1, mx: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: { borderRadius: "16px" } // Rounded edges
          }}
        />

        {/* Cart Icon */}
        <IconButton>
          <Badge badgeContent={cartCount} color="success">
            <ShoppingCartIcon fontSize="medium" />
          </Badge>
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          p: 2,
          bgcolor: "#f5f5f5",
          overflowX: "auto",
        }}
      >
        {categories.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => syncProduct(item)}
            sx={{
              px: 2,
              py: 2.5,
              fontWeight: 500,
              borderRadius: "12px",
              fontSize: "15px",
              backgroundColor:
                selected === item ? "#0B8A4B" : "#e0e0e0",
              color: selected === item ? "#fff" : "#333",
              border:
                selected === item
                  ? "none"
                  : "1px solid #d0d0d0",
              "&:hover": {
                backgroundColor:
                  selected === item ? "#09733E" : "#d5d5d5",
              },
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >

        {
          products.map((product, key) => (
            <ProductCard
              name={product.name}
              image={product.image}
              price={product.price}
              oldPrice={product.oldPrice}
              brand={product.brand}
            />
          ))
        }
      </Box>

    </Box>
  );
};

export default GrocerySearchBar;