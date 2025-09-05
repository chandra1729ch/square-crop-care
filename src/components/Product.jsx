import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";

function Product({ name, description, crop, dosage, packsize, imagepath }) {
  const [expanded, setExpanded] = useState(false);
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
      }}
    >
      {imagepath ? (
        <CardMedia component="img" height="400" image={imageSrc} alt={name} />
      ) : (
        <Box
          sx={{
            height: 180,
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
      <CardContent>
        <Stack spacing={1}>
          {/* Add vertical spacing between children */}
          <Typography variant="h5" >
            <strong>Name:</strong> {name}
          </Typography>
          {description && (
            <Box>
              <Typography
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  ...(expanded
                    ? { WebkitLineClamp: "unset" }
                    : { WebkitLineClamp: 2 }), // Show only 2 lines
                }}
              >
                {description}
              </Typography>

              <Button
                size="small"
                onClick={() => setExpanded(!expanded)}
                sx={{ mt: 1, textTransform: "none" }}
              >
                {expanded ? "View Less" : "View More"}
              </Button>
            </Box>
          )}
          {crop && (
            <Typography variant="body2">
              <strong>Crop:</strong> {crop}
            </Typography>
          )}
          {dosage && (
            <Typography variant="body2">
              <strong>Dosage:</strong> {dosage}
            </Typography>
          )}
          {packsize && (
            <Typography variant="body2">
              <strong>Package:</strong> {packsize}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Product;
