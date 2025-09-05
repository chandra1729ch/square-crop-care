import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import person1 from '../components/images/person_1.png';
import person2 from '../components/images/person_2.png';
import person3 from '../components/images/person_3.png';

function Team() {
  const team = [
    { name: "John Doe", role: "CEO", img: person1},
    { name: "Jane Smith", role: "CTO", img: person2},
    { name: "Sam Lee", role: "Designer", img: person3 },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={3}>
        {team.map((member, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ width: '330px', height: '250px', textAlign: "center", p: 2 }}>
              <img src={member.img} sx={{ mx: "auto", mb: 2 }}  style={{width: '150px', height: '150px', borderRadius: '40px'}}/>
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