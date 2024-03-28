import { Card, CardContent, CardMedia, Divider, Grid, Stack, Typography } from "@mui/material";
import ModalImage from "react-modal-image";

const HomeContent = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Stack spacing={1} sx={{ width: '90vw' }} display={"flex"} paddingY={3}>
                <Typography variant="h3" textAlign={"center"}>
                    Vozni park
                </Typography>
                <Divider />
                <Grid container direction="row" textAlign={"center"}>

                    <Grid item md={12} padding={2}>
                        <Typography variant="h5" textAlign={"center"}>
                            Operativna vozila
                        </Typography>
                    </Grid>

                    <Grid item md={12} lg={6} xl={4} padding={1}>
                        <Card>
                            <CardMedia component="div"
                                sx={{ objectFit: "contain" }}>
                                <ModalImage small={"/images/vozniPark/gvc_2.jpg"} large={"/images/vozniPark/gvc_2.jpg"} alt={"Gasilsko vozilo s cisterno (GVC)"} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Gasilsko vozilo s cisterno (GVC-1)
                                </Typography>
                                <Typography color="text.secondary">
                                    Podvozje: MAN 13.290 (2021)<br />
                                    Nadgradnja: Wiss (2023)<br />
                                    Posadka vozila: 1 + 7<br />
                                    Črpalka: Ruberg - 2500 l/min<br />
                                    Prostornina rezervoarja: 2600 litrov<br />
                                    Vozilo je namenjeno gašenju in reševanju pri požarih in manjših tehničnih
                                    intervencijah.
                                    Značilnosti vozila so večja količina vode v rezervoarju in možnosti izvedbe hitrega
                                    napada.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={12} lg={6} xl={4} padding={1}>
                        <Card>
                            <CardMedia component="div"
                                sx={{ objectFit: "contain" }}>
                                <ModalImage small={"/images/vozniPark/gvm_1.jpg"} large={"/images/vozniPark/gvm_1.jpg"} alt={"Gasilsko vozilo za moštvo (GVM)"} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Gasilsko vozilo za moštvo (GVM)
                                </Typography>
                                <Typography color="text.secondary">
                                    Podvozje: Volkswagen Transporter (2016)<br />
                                    Nadgradnja: Premier Adria (2017)<br />
                                    Posadka vozila: 1 + 8<br />
                                    Vozilo je namenjeno prevozu gasilcev in osebne opreme.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={12} lg={6} xl={4} padding={1}>
                        <Card>
                            <CardMedia component="div"
                                sx={{ objectFit: "contain" }}>
                                <ModalImage small={"/images/vozniPark/ac_1.jpg"} large={"/images/vozniPark/ac_1.jpg"} alt={"Avtocisterna (AC)"} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Avtocisterna (AC)
                                </Typography>
                                <Typography color="text.secondary">
                                    Podvozje: Mercedes Benz 1329 (2006)<br />
                                    Nadgradnja: Elektro Turnšek (2007) / Rosenbauer (2023)<br />
                                    Posadka vozila: 1 + 2<br />
                                    Črpalka: Turboinštitut - 1600 l/min<br />
                                    Prostornina rezervoarja: 6300 litrov<br />
                                    Vozilo je zaradi večje količine vode namenjeno oskrbi požarišča z vodo in prevozu
                                    pitne vode.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={12} lg={6} xl={4} padding={1}>
                        <Card>
                            <CardMedia component="div"
                                sx={{ objectFit: "contain" }}>
                                <ModalImage small={"/images/vozniPark/gv_1.jpg"} large={"/images/vozniPark/gv_1.jpg"} alt={"Orodno gasilsko vozilo (GV)"} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Orodno gasilsko vozilo (GV-1)
                                </Typography>
                                <Typography color="text.secondary">
                                    Podvozje: Mercedes Benz Sprinter 313 (2001)<br />
                                    Nadgradnja: Gasilska vozila Pušnik (2001)<br />
                                    Posadka vozila: 8+1<br />
                                    Črpalka: Prenosna motorna brizgalna Rosenbauer 8/8<br />
                                    Vozilo je namenjeno gašenju požarov, prevozu moštva, orodja in opreme na kraj
                                    intervencije.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={12} lg={6} xl={4} padding={1}>
                        <Card>
                            <CardMedia component="div"
                                sx={{ objectFit: "contain" }}>
                                <ModalImage small={"/images/vozniPark/gvc_1.jpg"} large={"/images/vozniPark/gvc_1.jpg"} alt={"Gasilsko vozilo s cisterno (GVC)"} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Gasilsko vozilo s cisterno (GVC-16/35)
                                </Typography>
                                <Typography color="text.secondary">
                                    Podvozje: Marcedes Benz 1324 (1992)<br />
                                    Nadgradnja: Gasilska vozila Pušnik (1997)<br />
                                    Posadka vozila: 5+1<br />
                                    Črpalka: Rosenbauer NH20 - 2000 l/min<br />
                                    Prostornina rezervoarja: 3400 litrov<br />
                                    Vozilo ima dva hitronapadalna navijaka.<br />
                                    Vozilo je namenjeno gašenju in reševanju pri požarih in manjših tehničnih
                                    intervencijah.
                                    Značilnosti vozila so večja količina vode v rezervoarju in možnosti izvedbe hitrega
                                    napada.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={12} padding={2}>
                        <Typography variant="h5" textAlign={"center"}>
                            Neoperativna vozila
                        </Typography>
                    </Grid>

                </Grid>
            </Stack>
        </div>
    );
};

export default HomeContent;
