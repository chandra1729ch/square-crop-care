import { Box, Grid, Typography, IconButton, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  const offices = [
    {
      city: "Corporate office Address",
      name: "SQUARE CROP CARE SCIENCES PRIVATE LIMITED",
      address:
        "H No. 6-3-347/7,Uma Residency,Dwarakapuri Colony, 1st Floor,Punjagutta,Hyderabad, Near Laxmi Womens Hostel, Telangana-500082.",
      phone: "040-45330111/9000406007/8008516644",
      gtsNo: "36ABHCS4437L1ZW",
      email: "squarecropcarepvtltd22@gmail.com",
    },
    {
      city: "Factory Address 1",
      name: "SQUARE CROP CARE SCIENCES PRIVATE LIMITED",
      address:
        "G P H No. 1-1/T34 A No. 95,Sy No. 88/E, Masaipet Mandal, Pothansettypally chowrastha, Medak, Telangana-502109.",
      phone: "040-45330111/9000406007/8008516644",
      gtsNo: "36ABHCS4437L1ZW",
      email: "squarecropcarepvtltd22@gmail.com",
    },
    {
      city: "Factory Address 2",
      name: "SQUARE CROP CARE SCIENCES PRIVATE LIMITED",
      address:
        "Plot No, 15/P, Jeedimetla, Qutubullapur, Hyderabad, Medchal Malkajgiri,Telangana-500055.",
      phone: "040-45330111/9000406007/8008516644",
      gtsNo: "36ABHCS4437L1ZW",
      email: "squarecropcarepvtltd22@gmail.com",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "green", color: "white", p: 4, mt: 4 }}>
      <Grid container spacing={4}>
        {offices.map((office, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: 3,
                height: "85%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  mb: 2,
                  color: "#A5D6A7",
                }}
              >
                {office.city}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                {office.name}
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 1, width: '300px' }}>
                <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
                {office.address}
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
                {office.phone}
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
                {office.email}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <hr style={{ margin: "20px 0", borderColor: "rgba(255,255,255,0.3)" }} />

      {/* Social Media Section */}
      <Box display="flex" justifyContent="center" gap={2} sx={{ mb: 2 }}>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://youtube.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://wa.me/+919000406007"
          target="_blank"
          sx={{ color: "white" }}
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:squarecropcarepvtltd22@gmail.com"
          sx={{ color: "white" }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton component="a" href="tel:9000406007" sx={{ color: "white" }}>
          <PhoneIcon />
        </IconButton>
      </Box>
      <hr style={{ margin: "20px 0", borderColor: "rgba(255,255,255,0.3)" }} />
      <Typography align="center" sx={{ fontSize: "14px" }}>
        © {new Date().getFullYear()} SQUARE CROP CARE SCIENCES PRIVATE LIMITED.
        All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
