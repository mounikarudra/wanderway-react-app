import React from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#e3f2fd",
        pt: 4,
        pb: 0,
        mt: 8,
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={3}
          sx={{ mb: 2 }}
        >
          <IconButton
            aria-label="Facebook"
            color="primary"
            size="large"
            href="https://facebook.com"
            target="_blank"
            sx={{
              bgcolor: "#54456b",
              color: "#fff",
              "&:hover": { bgcolor: "#3b2c50" },
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="YouTube"
            color="primary"
            size="large"
            href="https://youtube.com"
            target="_blank"
            sx={{
              bgcolor: "#54456b",
              color: "#fff",
              "&:hover": { bgcolor: "#c4302b" },
            }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            color="primary"
            size="large"
            href="https://instagram.com"
            target="_blank"
            sx={{
              bgcolor: "#54456b",
              color: "#fff",
              "&:hover": { bgcolor: "#e1306c" },
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            color="primary"
            size="large"
            href="https://twitter.com"
            target="_blank"
            sx={{
              bgcolor: "#54456b",
              color: "#fff",
              "&:hover": { bgcolor: "#1da1f2" },
            }}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
        <Box
          sx={{
            textAlign: "center",
            color: "#333",
            py: 2,
            // backgroundColor: "rgba(0,0,0,0.08)",
            borderRadius: 2,
            fontSize: "1.1rem",
          }}
        >
          Made with <span style={{ color: "#e57373" }}>❤️</span> ©{" "}
          <Link
            href="http://localhost:3000/"
            color="primary"
            underline="hover"
            fontWeight={600}
          >
            Wanderway
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
