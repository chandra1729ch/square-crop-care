// src/components/Navbar.jsx
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import RateReviewIcon from "@mui/icons-material/RateReview";
import logo from "../../src/logo4.png";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", link: "/", icon: <HomeIcon /> },
  { label: "About", link: "/about", icon: <InfoIcon /> },
  { label: "Products", link: "/products", icon: <Inventory2Icon /> },
  { label: "Team", link: "/team", icon: <GroupsIcon /> },
  { label: "Testimonial", link: "/testimonial", icon: <RateReviewIcon /> },
  { label: "Contact", link: "/contact", icon: <ContactMailIcon /> },
];

const navButtonStyle = {
  color: "white",
  textTransform: "none",
  fontSize: "18px",
  marginRight: "20px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    left: 0,
    bottom: -6,
    bgcolor: "white",
    transition: "width 0.25s ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((s) => !s);

  const drawer = (
    <Box sx={{ textAlign: "center", width: 230 }}>
      <Box sx={{ my: 2 }}>
        {/* Logo in drawer — use component={Link} and close drawer on click */}
        <Button
          component={Link}
          to="/"
          onClick={() => setMobileOpen(false)}
          sx={{ p: 0, minWidth: "auto" }}
        >
          <img
            src={logo}
            alt="SQUARE CROP SCIENCE PRIVATE LIMITED"
            style={{ height: 50, cursor: "pointer" }}
          />
        </Button>
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              onClick={() => setMobileOpen(false)} // close drawer
              sx={{ textAlign: "left" }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: "#2e7d32" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #0e8313ff, #e99922ff)",
          boxShadow: "0px 3px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar>
          {/* Logo (desktop) — wrapped in a Link via MUI Button so it's always clickable */}
          <Box sx={{ flexGrow: 1 }}>
            <Button
              component={Link}
              to="/"
              sx={{ p: 0, minWidth: "auto" }}
              aria-label="Go to home"
            >
              <img
                src={logo}
                alt="SQUARE CROP SCIENCE PRIVATE LIMITED"
                style={{ height: 70, maxWidth: 200, cursor: "pointer" }}
              />
            </Button>
          </Box>

          {/* Desktop nav items (use component={Link} to avoid full reload) */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.link}
                sx={navButtonStyle}
              >
                <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                  {/* Icon color will inherit; if you need white icons use sx on icon */}
                  <span style={{ display: "inline-flex", marginRight: 6 }}>
                    {item.icon}
                  </span>
                </Box>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
