import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person"; // Import the person icon
import CEOImage from "../components/images/img_ceo.jpeg"

function Team() {
  const team = [
    { name: "RAMACHANDRA REDDY KOGATAM", role: "CEO", img: CEOImage },
    { name: "VEDHAVATHI VALLURU", role: "MD", img: null },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {team.map((member, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                width: 330,
                height: 300,
                textAlign: "center",
                p: 2,
              }}
            >
              {member.img ? (
                <img
                  src={member.img}
                  alt={member.role}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%", // circular
                    objectFit: "cover",
                    margin: "0 auto 16px",
                    display: "block",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    color: "#555",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 50, mb: 1 }} />
                  <Typography variant="body2" fontWeight="bold">
                    No Image
                  </Typography>
                </Box>
              )}
              <CardContent>
                <Typography variant="h7">{member.name}</Typography>
                <Typography style={{marginTop: "20px"}} variant="body2" color="text.secondary">
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
