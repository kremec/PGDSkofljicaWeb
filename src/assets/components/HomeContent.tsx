import {Box, Divider, Grid, Typography} from "@mui/material";
import SocialMediaWidget from "./SocialMediaWidget.tsx";
import ModalImage from "react-modal-image";

const HomeContent = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Grid sx={{width: '90vw'}} paddingY={3}>
                <Grid container direction="row" spacing={10} textAlign={"center"}>
                    <Grid item md={12} lg={6}>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"}
                                  textAlign={"right"}>
                                <Box
                                    width="50%"
                                    component="img"
                                    alt="Logo"
                                    src="/images/PGD_logo_znak.png"
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <Typography fontWeight={"bold"} variant="h4">
                                    Prostovoljno gasilsko<br/>
                                    društvo Škofljica
                                </Typography>
                            </Grid>
                        </Grid>
                        <div style={{marginTop: '10px'}}/>
                        <Divider/>
                        <div style={{marginBottom: '20px'}}/>
                        <ModalImage small={"/images/operativa.jpg"} large={"/images/operativa.jpg"} alt={"Operativni gasilci PGD Škofljica"} />
                        <Typography variant="h5">
                            O nas
                        </Typography>
                        <Typography>
                            Smo društvo III. kategorije in osrednje društvo v občini Škofljica. V občini Škofljica
                            deluje šest gasilskih društev, združenih v Gasilsko zvezo Škofljica.
                            <br/><br/>
                            PGD Škofljica je bilo ustanovljeno leta 1898 in je najstarejše društvo v občini. Delujemo na
                            območju Škofljice in vasi Zalog, Glinek, Gumnišče, Gorenje Blato, Reber, Dole pri Škofljici
                            in Pleše.
                            <br/><br/>
                            Posredujemo pri gašenju požarov, ob poplavah, neurjih in drugih nesrečah. Za uspešno
                            posredovanje na intervencijah imamo gasilska vozila GVC-16/35, GV-1, GVM-1, GVC 16/25 in AC 16/50.
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={6} textAlign={"center"}>
                        <Typography variant="h5" paddingBottom={3}>
                            Novice in objave
                        </Typography>
                        <SocialMediaWidget/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomeContent;
