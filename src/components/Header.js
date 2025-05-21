import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{ backgroundColor: "#e3f2fd" }} // Light blue background
    >
      <Toolbar>
        <Typography
          variant="h5"
          color="primary"
          sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1.5 }}
        >
          Wanderway ✈️
        </Typography>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdgUgwgM5hghngQxIxB6YOPtn-5BZk2cEU0Y5r0V6YW9uuLzA/viewform"
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{
            mx: 2,
            fontWeight: 500,
            color: "primary.main",
            fontSize: "1.1rem",
          }}
        >
          Give Feedback!
        </Link>
        <Box>
          <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
            Login
          </Button>
          <Button variant="contained" color="primary" sx={{ mx: 1 }}>
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
