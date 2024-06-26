import { Box, Divider, Grid, Typography } from "@mui/material";
import SocialMediaWidget from "./SocialMediaWidget.tsx";
import ModalImage from "react-modal-image";

const HomeContent = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Grid sx={{ width: '90vw' }} paddingY={3}>
                <Grid container direction="row" spacing={10} textAlign={"center"}>
                    <Grid item md={12} lg={6}>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <Box
                                    width="50%"
                                    component="img"
                                    alt="Logo"
                                    src="/images/PGD_logo_znak.webp"
                                />
                            </Grid>
                            <Grid item xs={9} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <Typography fontWeight={"bold"} variant="h4">
                                    Prostovoljno gasilsko<br />
                                    društvo Škofljica
                                </Typography>
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: '10px' }} />
                        <Divider />
                        <div style={{ marginBottom: '20px' }} />
                        <ModalImage small={"/images/operativa.webp"} large={"/images/operativa.webp"} alt={"Operativni gasilci PGD Škofljica"} />
                        <Typography variant="h5">
                            O nas
                        </Typography>
                        <Typography>
                            Smo društvo III. kategorije in osrednje društvo v občini Škofljica. V občini Škofljica
                            deluje šest gasilskih društev, združenih v Gasilsko zvezo Škofljica.
                            <br /><br />
                            PGD Škofljica je bilo ustanovljeno leta 1898 in je najstarejše društvo v občini. Delujemo na
                            območju Škofljice in vasi Zalog, Glinek, Gumnišče, Gorenje Blato, Reber, Dole pri Škofljici
                            in Pleše.
                            <br /><br />
                            Posredujemo pri gašenju požarov, ob poplavah, neurjih in drugih nesrečah. Za uspešno
                            posredovanje na intervencijah imamo gasilska vozila GVC-1, GVM, AC 16/50, GV-1, in GVC 16/35.
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={6} textAlign={"center"} sx={{ width: { xs: '100%', md: 'auto' } }}>
                        <Typography variant="h5" paddingBottom={3}>
                            Novice in objave
                        </Typography>
                        <SocialMediaWidget />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomeContent;
