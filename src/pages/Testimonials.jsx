import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Avatar,
  Box,
} from "@mui/material";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Farmer",
    review:
      "Square Cropcare products have boosted my yield significantly. The quality is unmatched!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Anita Sharma",
    role: "Agro Dealer",
    review:
      "I have been selling their products for 3 years. Customers trust them, and I do too.",
    video: "https://www.w3schools.com/html/movie.mp4",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Karthik Reddy",
    role: "Distributor",
    review:
      "Square’s innovation in crop solutions is impressive. My clients are always satisfied.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

function Testimonials() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "green" }}
      >
        What Our Customers Say
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((t, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              {/* Customer Video */}
              <CardMedia component="video" src={t.video} controls height="250" />

              {/* Review Content */}
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar src={t.avatar} alt={t.name} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6">{t.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t.role}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  "{t.review}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Testimonials;
