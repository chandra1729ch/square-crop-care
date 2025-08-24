import { Container, Grid, Typography } from "@mui/material";
import { Work, Code, Cloud } from "@mui/icons-material";
import ServiceCard from "../components/ServiceCard";

function Services() {
  const services = [
    { title: "Consulting", desc: "Expert advice to grow your business.", icon: <Work /> },
    { title: "Development", desc: "Custom software solutions built for you.", icon: <Code /> },
    { title: "Cloud", desc: "Expand your presence worldwide.", icon: <Cloud /> },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((s, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <ServiceCard {...s} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


export default Services;