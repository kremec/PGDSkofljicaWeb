import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
import SocialMediaWidget from "./SocialMediaWidget.tsx";

const HomeContent = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Stack spacing={1} sx={{width: '90vw'}} display={"flex"} paddingY={3}>
                <Grid container direction="row" spacing={2} textAlign={"center"}>
                    <Grid item md={12} lg={6} sx={{textAlign: {md: "center", lg: "left"}}}>
                        <Box
                            width="25%"
                            component="img"
                            alt="Logo"
                            src="/images/PGD_logo_znak.png"
                        />
                        <Typography fontWeight={"bold"} variant="h4">
                            Prostovoljno<br/>
                            Gasilsko<br/>
                            Društvo<br/>
                            ŠKOFLJICA
                        </Typography>
                        <Divider style={{marginTop:'10',marginBottom:'10'}}/>

                        <Box
                            width="100%"
                            component="img"
                            alt="Operativni gasilci PGD Škofljica"
                            src="/images/operativa.jpg"
                        />
                        <Typography variant="h5">
                            O nas
                        </Typography>
                        <Typography>
                            Smo društvo III. kategorije in osrednje društvo v občini Škofljica. V občini Škofljica
                            deluje šest gasilskih društev, združenih v Gasilsko zvezo Škofljica.
                            <br/><br/>
                            PGD Škofljica je bilo ustanovljeno leta 1989 in je najstarejše društvo v občini. Delujemo na
                            območju Škofljice in vasi Zalog, Gumnišče, Glinek, Gorenje Blato, Reber, Dole pri Škofljici
                            in Pleše.
                            <br/><br/>
                            Posredujemo pri gašenju požarov, ob poplavah, neurjih in drugih nesrečah. Za uspešno
                            posredovanje na intervencijah imamo gasilska vozila GV-1, GVM-1, GVC 16/25 in AC 16/50.
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={6}>
                        <Typography variant="h5" paddingBottom={3}>
                            Novice in objave
                        </Typography>
                        <SocialMediaWidget />
                    </Grid>
                </Grid>
            </Stack>
        </div>
    );
};

export default HomeContent;
