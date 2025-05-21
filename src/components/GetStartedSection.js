import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";

function GetStartedSection() {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="md"
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
            <Typography variant="h3" color="primary" gutterBottom>
              Let your future travel plan begin here!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 4,
                px: 6,
                py: 1.5,
                fontSize: "1.2rem",
                borderRadius: 3,
                boxShadow: 2,
              }}
              onClick={() => navigate("/step1")}
            >
              Get Started!
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default GetStartedSection;
