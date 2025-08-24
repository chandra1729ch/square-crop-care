import { Card, CardContent, Typography, Box } from "@mui/material";

function ServiceCard({ title, desc, icon }) {
  return (
    <Card sx={{ minHeight: 180, textAlign: "center", p: 2, "&:hover": { boxShadow: 6 } }}>
      <CardContent>
        <Box sx={{ fontSize: 40, mb: 1 }}>{icon}</Box>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
      </CardContent>
    </Card>
  );
}


export default ServiceCard;
