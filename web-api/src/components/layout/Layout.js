import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          backgroundColor: "#F3F3F3",
          padding: 3
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default Layout;
