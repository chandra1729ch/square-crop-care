import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import ScienceIcon from "@mui/icons-material/ScienceRounded";
import SecurityIcon from "@mui/icons-material/SecurityRounded";
import AgricultureIcon from "@mui/icons-material/AgricultureRounded";
import CompostRoundedIcon from "@mui/icons-material/CompostRounded";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box
      sx={{
        position: "relative",
        py: 6,
        backgroundImage: `url("/about-bg.png")`, // Place your AI-generated image in public/images
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(255, 255, 255, 0.85)", // translucent overlay for readability
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Heading */}
        {currentPath === "/about" && (
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: "bold", color: "green", mb: 4 }}
          >
            About Us
          </Typography>
        )}

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
          {[
            {
              title: "Quality Assurance",
              icon: <SecurityIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />,
              text: "Every product is tested to meet strict safety and performance standards.",
            },
            {
              title: "Farmer-Centric",
              icon: <AgricultureIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />,
              text: "Affordable, effective solutions tailored for farmers’ needs.",
            },
            {
              title: "Sustainability",
              icon: <CompostRoundedIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />,
              text: "Responsible usage that supports soil health & biodiversity.",
            },
            {
              title: "Innovation",
              icon: <ScienceIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />,
              text: "Advanced formulations developed with continuous research.",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                  {item.title}
                </Typography>
                {item.icon}
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
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
