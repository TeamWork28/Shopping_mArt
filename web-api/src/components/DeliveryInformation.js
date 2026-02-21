import {
    Box,
    Typography,
    TextField,
    Paper
} from "@mui/material";

export default function DeliveryInformation({ }) {
    return (
        <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>

            <Typography variant="h5" fontWeight={600} mb={2}>
                Delivery Information
            </Typography>

            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    borderRadius: 4,
                    backgroundColor: "#f5f5f5"
                }}
            >
                {/* Full Name */}
                <Box sx={rowStyle}>
                    <Typography sx={labelStyle}>Full Name</Typography>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="John Doe"
                        variant="outlined"
                    />
                </Box>

                {/* Address */}
                <Box sx={rowStyle}>
                    <Typography sx={labelStyle}>Address</Typography>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="123 Elm Street, Springfield"
                    />
                </Box>

                {/* City + Zip Code */}
                <Box sx={rowStyle}>
                    <Typography sx={labelStyle}>City</Typography>

                    <Box sx={{ display: "flex", gap: 2, flex: 1 }}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Springfield"
                        />
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Zip Code"
                        />
                    </Box>
                </Box>

                {/* Phone */}
                <Box sx={{ ...rowStyle, mb: 0 }}>
                    <Typography sx={labelStyle}>Phone</Typography>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="(555) 123-4567"
                    />
                </Box>
            </Paper>
        </Box>
    );
};

const rowStyle = {
    display: "flex",
    alignItems: "center",
    mb: 2
};

const labelStyle = {
    width: 120,
    fontSize: 14,
    color: "#333"
};
