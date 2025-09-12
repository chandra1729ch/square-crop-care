import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
function Product({ id, name, imagepath }) {
  let imageSrc = "";
  if (imagepath) {
    imageSrc = require(`../components/images/${imagepath}`);
  }

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.03)" },
      }}
      component={Link}
      to={`/products/${id}`} // Navigate to ProductDetailPage
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {imagepath ? (
        <CardMedia
          component="img"
          height="440"
          image={imageSrc}
          alt={name}
          sx={{ objectFit: "cover" }}
        />
      ) : (
        <Box
          sx={{
            height: 220,
            backgroundColor: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9rem",
            color: "#888",
          }}
        >
          No Image
        </Box>
      )}
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Product;
