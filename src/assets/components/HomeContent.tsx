import {Divider, Grid, Stack, Typography} from "@mui/material";

const HomeContent = () => {
  return (
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
          <Stack spacing={1} sx={{width: '90vw'}} display={"flex"} paddingY={3}>
              <Grid container direction="row" spacing={2} textAlign={"center"}>
                  <Grid item md={12} lg={6} textAlign={"left"}>
                      <img src="/images/PGD_logo_znak.png" width="100px"/>
                      <Typography fontWeight={"bold"} variant="h4">
                          Prostovoljno<br/>
                          Gasilsko<br/>
                          Društvo<br/>
                          ŠKOFLJICA
                      </Typography>
                      <Divider />

                      <img src="/images/operativa.jpg" width="100%"/>
                      <Typography variant="h5">
                          O nas
                      </Typography>
                      <Typography>
                          Smo društvo III. kategorije in osrednje društvo v občini Škofljica. V občini Škofljica deluje šest gasilskih društev, združenih v Gasilsko zvezo Škofljica.
                          <br/><br/>
                          PGD Škofljica je bilo ustanovljeno leta 1989 in je najstarejše društvo v občini. Delujemo na območju Škofljice in vasi Zalog, Gumnišče, Glinek, Gorenje Blato, Reber, Dole pri Škofljici in Pleše.
                          <br/><br/>
                          Posredujemo pri gašenju požarov, ob poplavah, neurjih in drugih nesrečah. Za uspešno posredovanje na intervencijah imamo gasilska vozila GV-1, GVM-1, GVC 16/25 in AC 16/50.
                      </Typography>
                  </Grid>
                  <Grid item md={12} lg={6}>

                  </Grid>
              </Grid>
          </Stack>
      </div>
  );
};

export default HomeContent;
