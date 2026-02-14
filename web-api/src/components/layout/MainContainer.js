import { Box } from "@mui/material";

function MainContainer({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        padding: "32px"
      }}
    >
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          borderRadius: "16px",
          overflow: "hidden",
          display: "flex"
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default MainContainer;
