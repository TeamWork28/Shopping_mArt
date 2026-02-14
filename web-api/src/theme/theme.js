import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#E2E5E7"
    }
  },
  typography: {
    fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
          color: "success"
        }
      }
    }
  }

});


export default theme;
