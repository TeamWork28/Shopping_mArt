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
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import ThemeImage from '../../asserts/theme_image.png'
import { useNavigate } from "react-router-dom";
import { signIn } from '../../apiService/auth';
import { setCookie,getCookie } from '../../helper/cookie'

export default function SignInDesktop() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [err, setErr] = useState(false);

    const [formData, setFormData] = useState({
        "email": null,
        "password": null,
        "role": "699a896c50e8b6b721a63600"
    });

    const hendleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submitForm = async () => {

        if (!formData.email || !formData.password) return setErr(true);
        
        let response = await signIn(formData);

        console.log(response)

        if (!response?.status) return setErr(true);

        await setCookie('token',response.token,7);

        navigate('/products');
    }


    return (
        <Box sx={{ height: "100vh" }}>
            <Grid container sx={{ height: "100%" }}>

                {/* LEFT SECTION */}
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
                        // backgroundColor: "#F3F3F3",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        px: 6
                    }}
                >
                    <Box sx={{ width: 400 }}>

                        <Typography variant="h4" fontWeight="bold" mb={3}>
                            Welcome Back 👋
                        </Typography>

                        <TextField
                            fullWidth
                            size="medium"
                            margin="normal"
                            label="Email"
                            name='email'
                            value={formData.email}
                            onChange={hendleChange}
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
                            size="medium"
                            margin="normal"
                            label="Password"
                            name="password"
                            value={formData.password}
                            onChange={hendleChange}
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
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />

                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember Me"
                            sx={{ mt: 1 }}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            onClick={submitForm}
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
                            Sign In
                        </Button>

                        <Typography
                            mt={3}>
                            Don’t have an account?{" "}
                            <span
                                onClick={() => navigate('/signup')}
                                style={{
                                    color: "#0f9d58",
                                    cursor: "pointer",
                                    fontWeight: 500
                                }}
                            >
                                Sign Up
                            </span>
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
