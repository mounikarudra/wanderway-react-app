import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const RedirectPage = () => {
  const [countdown, setCountdown] = useState(8); // Initial countdown value
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      window.open("https://www.skyscanner.com", "_blank");
      navigate("/step1");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card elevation={8} sx={{ width: "100%", borderRadius: 4 }}>
        <CardContent>
          <Box sx={{ textAlign: "center", py: 6 }}>
            <CircularProgress color="primary" size={60} sx={{ mb: 3 }} />
            <Typography variant="h4" color="primary" gutterBottom>
              Redirecting...
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Come back to this page once you have decided on a place
            </Typography>
            <Typography variant="body1" sx={{ mt: 3 }}>
              You will be redirected to Skyscanner to browse flights in{" "}
              <Box
                component="span"
                color="primary.main"
                fontWeight="bold"
                fontSize="1.3rem"
              >
                {countdown}
              </Box>{" "}
              seconds.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RedirectPage;
