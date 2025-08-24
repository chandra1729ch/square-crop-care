import { Container, Grid, Card, CardContent, Avatar, Typography } from "@mui/material";

function Team() {
  const team = [
    { name: "John Doe", role: "CEO", img: "https://i.pravatar.cc/150?img=3" },
    { name: "Jane Smith", role: "CTO", img: "https://i.pravatar.cc/150?img=5" },
    { name: "Sam Lee", role: "Designer", img: "https://i.pravatar.cc/150?img=7" },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={3}>
        {team.map((member, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ textAlign: "center", p: 2 }}>
              <Avatar src={member.img} sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} />
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Team;