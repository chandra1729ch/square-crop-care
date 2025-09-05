import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import logo from "../../src/logo3.png";
const navButtonStyle = {
    color: "white",
    textTransform: "none",
    fontSize: "18px",
    marginRight: "20px",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "2px",
      left: 0,
      bottom: 0,
      bgcolor: "white",
      transition: "width 0.3s ease-in-out",
    },
    "&:hover::after": {
      width: "100%", // animate underline
    },
  };
function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "green" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img
            style={{ height: "70px", maxWidth: "200px" }}
            src={logo}
            alt="SQUARE CROP SCIENCE PROIVATE LIMITED"
          />
        </Typography>
        <div style={{display: 'flex', flexDirection:'row', alignContent: 'space-between'}}>
          <Button sx={navButtonStyle} color="inherit" href="/">
            Home
          </Button>
          <Button sx={navButtonStyle} color="inherit" href="/about">
            About
          </Button>

          {/* Dropdown for Services */}
          <Button sx={navButtonStyle} color="inherit" href="/products">
            Products
          </Button>
          {/* <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
        >
          <MenuItem onClick={handleClose} sx={{ "&:hover": { backgroundColor: "lightgreen" } }}>
            Web Development
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ "&:hover": { backgroundColor: "lightgreen" } }}>
            Mobile Apps
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ "&:hover": { backgroundColor: "lightgreen" } }}>
            Cloud Solutions
          </MenuItem>
        </Menu> */}

          <Button sx={navButtonStyle} color="inherit" href="/team">
            Team
          </Button>
          <Button sx={navButtonStyle} color="inherit" href="/contact">
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
