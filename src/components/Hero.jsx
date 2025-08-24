import { Box, Typography, Button, Container } from "@mui/material";

function Hero() {
  return (
    <Box sx={{ backgroundColor: "lightgreen", color: "black", py: 10 }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to SQUARE CROP CARE 
        </Typography>
        <Typography variant="h6" gutterBottom>
          We build digital solutions that transform your business.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "green", mt: 3 }}>
          Get Started
        </Button>
      </Container>
    </Box>
  );
}


export default Hero;