import { Box, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import logo from "../../src/logo4.png"; // Replace with actual group/company logo if different

function Footer() {
  const currentYear = new Date().getFullYear();
  const navItems = [
  { label: "Home", link: "/"},
  { label: "About", link: "/about"},
  { label: "Products", link: "/products"},
  { label: "Team", link: "/team"},
  { label: "Testimonial", link: "/testimonial"},
  { label: "Contact", link: "/contact"},
];

  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #0e8313ff, #e99922ff)",
        color: "#fff",
        pt: 4,
      }}
    >
      {/* Social Media Icons */}
      <Box display="flex" justifyContent="center" gap={2} mb={2}>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://youtube.com"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <YouTubeIcon />
        </IconButton>
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

      {/* Navigation Links */}
      <Box
        display="flex"
        justifyContent="center"
        gap={3}
        flexWrap="wrap"
        mb={2}
      >
        {navItems.map((text) => (
          <Link
            key={text.label}
            href={text.link}
            underline="hover"
            sx={{ color: "#ccc", fontSize: "14px" }}
          >
            {text.label}
          </Link>
        ))}
      </Box>

      {/* Logo and Copyright */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        py={2}
        sx={{ borderTop: "1px solid #333" }}
      >
        <Box display="flex" alignItems="center" sx={{ mb: { xs: 1, sm: 0 } }}>
          <img
            src={logo}
            alt="Company Logo"
            style={{ height: 50 }} // Slightly bigger and full visibility
          />
        </Box>
        <Typography variant="body2" style={{marginRight: "500px"}} color="white">
          Copyright © {currentYear} SQUARE CROP CARE SCIENCES PRIVATE LIMITED.
        </Typography>

      </Box>
    </Box>
  );
}

export default Footer;
