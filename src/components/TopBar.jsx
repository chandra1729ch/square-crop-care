import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function TopBar() {
  // get today’s date
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "green", py: 0.1, opacity: 0.5 }}
      elevation={0}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "32px !important",
        }}
      >
        {/* Left side */}
        <Typography variant="body2" sx={{ color: "white", fontWeight: 500 }}>
          An ISO 9001 : 2015 Certified Company
        </Typography>

        {/* Center - Date */}
        <Typography variant="body2" sx={{ color: "white" }}>
          {today}
        </Typography>

        {/* Right side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
          component="a"
          href="https://wa.me/+919000406007"
          target="_blank"
          sx={{ color: "white" }}
        >
          {" "}
          <WhatsAppIcon />{" "}
        </IconButton>{" "}
        <IconButton
          component="a"
          href="mailto:squarecropcarepvtltd22@gmail.com"
          sx={{ color: "white" }}
        >
          {" "}
          <EmailIcon />{" "}
        </IconButton>{" "}
        <IconButton component="a" href="tel:9000406007" sx={{ color: "white" }}>
          {" "}
          <PhoneIcon />{" "}
        </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
