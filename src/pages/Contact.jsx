import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

function Contact() {
  const offices = [
    {
      city: "Corporate office Address",
      name: "SQUARE CROP CARE SCIENCES PRIVATE LIMITED",
      address: "H No. 6-3-347/7,Uma Residency,Dwarakapuri Colony, 1st Floor,Punjagutta,Hyderabad, Near Laxmi Womens Hostel, Telangana-500082.",
      phone: "040-45330111/9000406007/8008516644",
      gtsNo:"36ABHCS4437L1ZW",
      email: "squarecropcarepvtltd22@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.231!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c9f97b3f9b%3A0x2e15d5!2sHyderabad!5e0!3m2!1sen!2sin!4v1677605229387",
    },
    {
      city: "Factory Address 1",
      name: "SQUARE CROP CARE SCIENCES PRIVATE LIMITED",
      address: "G P H No. 1-1/T34 A No. 95,Sy No. 88/E, Masaipet Mandal, Pothansettypally chowrastha, Medak, Telangana-502109.",
      phone: "040-45330111/9000406007/8008516644",
      gtsNo:"36ABHCS4437L1ZW",
      email: "squarecropcarepvtltd22@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.835!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b7f5f9c5%3A0x2b3f3b7a2d7f6d7!2sBangalore!5e0!3m2!1sen!2sin!4v1677605329387"
    },
    {
      city: "Factory Address 2",
      name: "SQUARE CROP CARE SCIENCES PRIVATE LIMITED",
      address: "Plot No, 15/P, Jeedimetla, Qutubullapur, Hyderabad, Medchal Malkajgiri,Telangana-500055.",
      phone: "040-45330111/9000406007/8008516644",
      gtsNo:"36ABHCS4437L1ZW",
      email: "squarecropcarepvtltd22@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.835!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b7f5f9c5%3A0x2b3f3b7a2d7f6d7!2sBangalore!5e0!3m2!1sen!2sin!4v1677605329387",
    },
  ];

  return (
    <>
      {/* Section 1: Cards */}
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          color="green"
          fontWeight="bold"
        >
          Contact Our Offices
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {offices.map((office, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: "12px", boxShadow: 3, p: 2 }}>
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {office.city}
                  </Typography>
                  <Typography style={{maxWidth: "300px"}} variant="body2" sx={{ mt: 1 }}>
                    {office.address}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, fontWeight: "bold" }}
                  >
                    GST No. {office.gtsNo}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, fontWeight: "bold" }}
                  >
                    ✉️<a href={`mailto:${office.email}`}>{office.email}</a> 
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, fontWeight: "bold" }}
                  >
                    📞 {office.phone}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Section 2: Maps */}
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          color="green"
          fontWeight="bold"
        >
          Find Us on Map
        </Typography>
        <Grid container spacing={10}>
          {offices.map((office, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 1, fontWeight: "bold" }}
              >
                {office.city}
              </Typography>
              <iframe
                src={office.map}
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                title={office.city}
              ></iframe>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default Contact;