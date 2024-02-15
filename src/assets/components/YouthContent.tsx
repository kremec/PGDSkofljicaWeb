import {Divider, Grid, Stack, Typography} from "@mui/material";

const HomeContent = () => {
  return (
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
          <Stack spacing={1} sx={{width:'90vw'}} display={"flex"} paddingY={3}>
              <Typography variant="h3" textAlign={"center"}>
                  Mladina
              </Typography>

              <Typography>
                  Če želite svojega otroka prijaviti na gasilske vaje, kontaktirajte katerega izmed mentorjev preko spodaj navedenih telefonskih številk, ali pa se oglasite na vajah, ki potekajo po spodnjih terminih.
              </Typography>
              <Divider />
              <Grid container direction="row" spacing={2} textAlign={"center"}>
                  <Grid item xs>
                      <b>Kontakti mentorjev:</b><br/>
                      Gašper Vešligaj: +386 40 379 212<br/>
                      Rok Brglez: +386 41 659 133<br/>
                      Klemen Remec: +386 70 754 018
                  </Grid>
                  <Grid item xs>
                      <b>Tedensko srečanje mladine:</b><br/>
                      Pionirji (od 7 do 11 let): četrtek ob 18. uri<br/>
                      Mladinci (od 12 do 15 let): torek ob 18. uri<br/>
                      Pripravniki (od 16 do 18 let): torek ob 18. uri
                  </Grid>
                  <Grid item xs>
                      <b>Naslednja tekmovanja:</b><br/>
                      Kviz - 2. marec 2024 - OŠ Ig
                  </Grid>
              </Grid>
              <Divider />
          </Stack>
      </div>
  );
};

export default HomeContent;
