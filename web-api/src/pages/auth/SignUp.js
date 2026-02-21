import React, { useState } from "react";
import {
    Box,
    Grid,
    TextField,
    Button,
    Typography,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    IconButton
} from "@mui/material";
import {
    Visibility,
    VisibilityOff,
    Email,
    Lock,
    Person,
    Phone
} from "@mui/icons-material";
import ThemeImage from '../../asserts/theme_image.png'
import { useNavigate } from "react-router-dom";

export default function SignUpDesktop() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Box sx={{ height: "100vh" }}>
            <Grid container sx={{ height: "100%" }}>

                {/* LEFT SECTION (Same as Sign In) */}
                <Grid
                    item
                    md={6}
                    sx={{
                        backgroundColor: "#e8f5e9",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        px: 8
                    }}
                >
                    <img
                        src={ThemeImage}
                        alt="Grocery"
                        style={{ width: 280 }}
                    />

                    <Typography variant="h3" fontWeight="bold" mt={4}>
                        Grocery Mart
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                    >
                        Fresh groceries delivered to you
                    </Typography>
                </Grid>

                {/* RIGHT SECTION */}
                <Grid
                    item
                    md={6}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        px: 6
                    }}
                >
                    <Box sx={{ width: 400 }}>

                        <Typography variant="h4" fontWeight="bold" mb={3}>
                            Create Your Account 🛒
                        </Typography>

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Full Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Mobile Number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Phone />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Confirm Password"
                            type="password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <FormControlLabel
                            control={<Checkbox />}
                            label="I agree to Terms & Privacy Policy"
                            sx={{ mt: 1 }}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                py: 1.4,
                                backgroundColor: "#0f9d58",
                                borderRadius: 2,
                                "&:hover": {
                                    backgroundColor: "#0c7c43"
                                }
                            }}
                        >
                            Create Account
                        </Button>

                        <Typography mt={3}>
                            Already have an account?{" "}
                            <span
                                style={{
                                    color: "#0f9d58",
                                    cursor: "pointer",
                                    fontWeight: 500
                                }}
                                onClick={() => navigate('/')}

                            >
                                Sign In
                            </span>
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}