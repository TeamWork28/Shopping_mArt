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
import {signUp} from '../../apiService/auth';

export default function SignUpDesktop() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [err, setErr] = useState(false);

    const [formData, setFormData] = useState({
        "fullName": null,
        "email": null,
        "mobileNumber": null,
        "password": null,
        "confirmPassword": null,
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
        
        if (!formData.fullName || !formData.email || !formData.mobileNumber || !formData.password) {
            return setErr(true);
        }
        let userData = {...formData}; 

        delete userData.confirmPassword;

        let response = await signUp(userData);

        if(!response.status) return setErr(true);

        navigate('/');
    }

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
                            name="fullName"
                            value={formData.fullName}
                            label="Full Name"
                            onChange={hendleChange}
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
                            name="email"
                            value={formData.email}
                            label="Email"
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
                            margin="normal"
                            name="mobileNumber"
                            label="Mobile Number"
                            value={formData.mobileNumber}
                            onChange={hendleChange}
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
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />

                        <TextField
                            fullWidth
                            margin="normal"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            label="Confirm Password"
                            onChange={hendleChange}
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