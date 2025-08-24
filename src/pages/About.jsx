import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import ScienceIcon from "@mui/icons-material/ScienceRounded";
import SecurityIcon from "@mui/icons-material/SecurityRounded";
import AgricultureIcon from "@mui/icons-material/AgricultureRounded";
import CompostRoundedIcon from '@mui/icons-material/CompostRounded';

function About() {
  return (
    <Box sx={{ bgcolor: "#f9fdf9", py: 6 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", color: "green", mb: 4 }}
        >
          About Us
        </Typography>

        {/* Intro Description */}
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "#444", maxWidth: "800px", mx: "auto", mb: 6 }}
        >
          At <b>SQUARE CROP CARE SCIENCES PVT LTD</b>, we are committed to
          protecting crops, safeguarding farmers’ hard work, and ensuring
          sustainable agricultural growth. With years of expertise in crop
          protection, we provide high-quality pesticides, insecticides, and
          agrochemicals that help farmers maximize yields while maintaining
          environmental balance.
        </Typography>

        {/* Why Choose Us Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                width: "400px",
                height: "130px",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Quality Assurance
              </Typography>
              <SecurityIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />
              <Typography variant="body2" color="text.secondary">
                Every product is tested to meet strict safety and performance
                standards.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                width: "400px",
                height: "130px",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Farmer-Centric
              </Typography>
              <AgricultureIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />
              <Typography variant="body2" color="text.secondary">
                Affordable, effective solutions tailored for farmers’ needs.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                width: "400px",
                height: "130px",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Sustainability
              </Typography>
              <CompostRoundedIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />
              <Typography variant="body2" color="text.secondary">
                Responsible usage that supports soil health & biodiversity.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                width: "400px",
                height: "130px",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Innovation
              </Typography>
              <ScienceIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />
              <Typography variant="body2" color="text.secondary">
                Advanced formulations developed with continuous research.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Closing Statement */}
        <Typography
          variant="h6"
          align="center"
          sx={{ mt: 6, color: "#444", maxWidth: "800px", mx: "auto" }}
        >
          With trust, innovation, and commitment,{" "}
          <b>SQUARE CROP CARE SCIENCES PVT LTD</b> stands as a reliable partner
          for farmers across the region. Together, let’s grow stronger,
          healthier, and greener farms for a better tomorrow. 🌾🌍
        </Typography>
      </Container>
    </Box>
  );
}
export default About;
