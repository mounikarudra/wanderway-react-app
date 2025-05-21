import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

function Step1() {
  const navigate = useNavigate();
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
            <Typography variant="h4" color="primary" gutterBottom>
              Did you already decide on a place?
            </Typography>
            <Stack
              direction="row"
              spacing={4}
              justifyContent="center"
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: "1.1rem",
                  borderRadius: 3,
                  boxShadow: 2,
                }}
                onClick={() => navigate("/collect-info")}
              >
                Yes
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 5, py: 1.5, fontSize: "1.1rem", borderRadius: 3 }}
                onClick={() => navigate("/step2")}
              >
                No
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Step1;
