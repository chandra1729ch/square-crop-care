import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
  Divider,
  Rating,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import products from "../products.json";
import BackButton from "../components/BackButton";

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Product not found
        </Typography>
        <Button
          component={Link}
          to="/products"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Back to Products
        </Button>
      </Container>
    );
  }

  let imageSrc = "";
  if (product.imagepath) {
    imageSrc = require(`../components/images/${product.imagepath}`);
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <BackButton />
      <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              gutterBottom
            >
            Product Details
            </Typography>
      <Card
        sx={{
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        }}
      >
        <CardMedia
          component="img"
          height="700"
          image={imageSrc}
          alt={product.name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          {/* Product Name */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.name}
          </Typography>

          {/* Product Short Description */}
          {product.description && (
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
          )}

          {/* Product Attributes */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {product.crop && (
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Crop:</strong> {product.crop}
                </Typography>
              </Grid>
            )}
            {product.dosage && (
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Dosage:</strong> {product.dosage}
                </Typography>
              </Grid>
            )}
            {product.packsize && (
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Package:</strong> {product.packsize}
                </Typography>
              </Grid>
            )}
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Extra Fabricated Details */}

          {/* Rating & Reviews */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              ⭐ Customer Rating
            </Typography>
            <Rating value={4} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary">
              120 reviews • Most customers recommend this product
            </Typography>
          </Box>

          {/* Key Benefits */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              🌿 Key Benefits
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Enhances crop yield and quality." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Eco-friendly and safe for long-term use." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tested and trusted by farmers nationwide." />
              </ListItem>
            </List>
          </Box>

          {/* Usage Instructions */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              📦 Usage Instructions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dilute with clean water before application. Apply during early
              morning or late evening for best results. Store in a cool, dry
              place away from direct sunlight.
            </Typography>
          </Box>

          {/* Related Products */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              🔗 Related Products
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card sx={{ p: 2, textAlign: "center" }}>
                  <Typography variant="subtitle2">
                    Organic Fertilizer
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ p: 2, textAlign: "center" }}>
                  <Typography variant="subtitle2">Bio Pesticide</Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Back Button */}
          <Box sx={{ mt: 4 }}>
            <Button
              component={Link}
              to="/products"
              variant="contained"
              sx={{ borderRadius: "8px" }}
            >
              Back to Products
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductDetailPage;
