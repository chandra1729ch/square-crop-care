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
      phone1: "9000406007",
      phone3: "8008516644",
      phone2:"040-45330111",
      gtsNo:"36ABHCS4437L1ZW",
      email: "squarecropcarepvtltd22@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.762982985704!2d78.4488334751657!3d17.423158583470126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI1JzIzLjQiTiA3OMKwMjcnMDUuMSJF!5e0!3m2!1sen!2sin!4v1756993250886!5m2!1sen!2sin",
    },
    {
      city: "WareHouse Address",
      name: "SQUARE CROP CARE SCIENCES PRIVATE LIMITED",
      address: "G P H No. 1-1/T34 A No. 95,Sy No. 88/E, Masaipet Mandal, Pothansettypally chowrastha, Medak, Telangana-502109.",
      phone1: "9000406007",
      phone3: "8008516644",
      phone2:"040-45330111",
      gtsNo:"36ABHCS4437L1ZW",
      email: "squarecropcarepvtltd22@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3796.258409867804!2d78.47778697517728!3d17.920097383060856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU1JzEyLjQiTiA3OMKwMjgnNDkuMyJF!5e0!3m2!1sen!2sin!4v1756993450530!5m2!1sen!2sin"
    }
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
                    📞 <a href={`tel:${office.phone1}`}>{office.phone1}</a>/<a href={`tel:${office.phone2}`}>{office.phone2}</a>/<a href={`tel:${office.phone3}`}>{office.phone3}</a>
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
        <Grid container spacing={3} justifyContent="center">
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