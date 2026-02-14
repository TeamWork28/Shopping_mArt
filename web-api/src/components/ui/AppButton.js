import { Button } from "@mui/material";

function AppButton({ children, fullWidth = true, ...props }) {
  return (
    <Button
      variant="contained"
      fullWidth={fullWidth}
      sx={{
        backgroundColor: "#15803d", // green shade
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: 600,
        paddingY: 1.2,
        fontSize: "0.95rem",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#166534",
          boxShadow: "none"
        }
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default AppButton;
