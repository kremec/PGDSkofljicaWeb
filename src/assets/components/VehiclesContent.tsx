import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ModalImage from "react-modal-image";

const HomeContent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={1} sx={{ width: "90vw" }} display={"flex"} paddingY={3}>
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
          {OperativeVehiclesData.map((vehicle) => {
            return (
              <Grid item md={12} lg={6} xl={4} padding={1}>
                <Card>
                  <CardMedia component="div" sx={{ objectFit: "contain" }}>
                    <ModalImage
                      small={vehicle.image}
                      large={vehicle.image}
                      alt={vehicle.name}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {vehicle.name}
                    </Typography>
                    {vehicle.content}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}

          <Grid item md={12} padding={2}>
            <Typography variant="h5" textAlign={"center"}>
              Vozila skozi čas
            </Typography>
          </Grid>
          {NonoperativeVehiclesData.map((vehicle) => {
            return (
              <Grid item md={12} lg={6} xl={4} padding={1}>
                <Card>
                  <CardMedia component="div" sx={{ objectFit: "contain" }}>
                    <ModalImage
                      small={vehicle.image}
                      large={vehicle.image}
                      alt={vehicle.name}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {vehicle.name}
                    </Typography>
                    {vehicle.content}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </div>
  );
};

export default HomeContent;

const OperativeVehiclesData = [
  {
    name: "Gasilsko vozilo s cisterno (GVC-1)",
    image: "/images/vozniPark/gvc1.webp",
    content: (
      <Typography color="text.secondary">
        Podvozje: MAN 13.290 (2021)
        <br />
        Nadgradnja: Wiss (2023)
        <br />
        Posadka vozila: 1 + 7<br />
        Črpalka: Ruberg - 2500 l/min
        <br />
        Prostornina rezervoarja: 2600 litrov
        <br />
        Vozilo je namenjeno gašenju in reševanju pri požarih in manjših
        tehničnih intervencijah. Značilnosti vozila so večja količina vode v
        rezervoarju in možnosti izvedbe hitrega napada.
      </Typography>
    ),
  },
  {
    name: "Gasilsko vozilo za moštvo (GVM)",
    image: "/images/vozniPark/gvm.webp",
    content: (
      <Typography color="text.secondary">
        Podvozje: Volkswagen Transporter (2016)
        <br />
        Nadgradnja: Premier Adria (2017)
        <br />
        Posadka vozila: 1 + 8<br />
        Vozilo je namenjeno prevozu gasilcev in osebne opreme.
      </Typography>
    ),
  },
  {
    name: "Avtocisterna (AC 16/50)",
    image: "/images/vozniPark/ac.webp",
    content: (
      <Typography color="text.secondary">
        Podvozje: Mercedes Benz 1529 (2006)
        <br />
        Nadgradnja: Elektro Turnšek (2007) / Rosenbauer (2023)
        <br />
        Posadka vozila: 1 + 2<br />
        Črpalka: Turboinštitut - 1600 l/min
        <br />
        Prostornina rezervoarja: 6300 litrov
        <br />
        Vozilo je zaradi večje količine vode namenjeno oskrbi požarišča z vodo
        in prevozu pitne vode.
      </Typography>
    ),
  },
  {
    name: "Orodno gasilsko vozilo (GV-1)",
    image: "/images/vozniPark/gv1.webp",
    content: (
      <Typography color="text.secondary">
        Podvozje: Mercedes Benz Sprinter 414 (2001)
        <br />
        Nadgradnja: Gasilska vozila Pušnik (2001)
        <br />
        Posadka vozila: 1+8
        <br />
        Črpalka: Prenosna motorna brizgalna Rosenbauer 8/8
        <br />
        Vozilo je namenjeno gašenju požarov, prevozu moštva, orodja in opreme na
        kraj intervencije.
      </Typography>
    ),
  },
  {
    name: "Gasilsko vozilo s cisterno (GVC 16/35)",
    image: "/images/vozniPark/gvc1635.webp",
    content: (
      <Typography color="text.secondary">
        Podvozje: Marcedes Benz 1324 (1992)
        <br />
        Nadgradnja: Gasilska vozila Pušnik (1997)
        <br />
        Posadka vozila: 1+5
        <br />
        Črpalka: Rosenbauer NH20 - 2000 l/min
        <br />
        Prostornina rezervoarja: 3400 litrov
        <br />
        Vozilo ima dva hitronapadalna navijaka.
        <br />
        Vozilo je namenjeno gašenju in reševanju pri požarih in manjših
        tehničnih intervencijah. Značilnosti vozila so večja količina vode v
        rezervoarju in možnosti izvedbe hitrega napada.
      </Typography>
    ),
  },
];
const NonoperativeVehiclesData = [
  {
    name: "Orodno gasilsko vozilo",
    image: "/images/vozniPark/gv_staro.webp",
    content: (
      <Typography color="text.secondary">
        Podvozje: TAM 75 T 5 (1979)
        <br />
        Nadgradnja: Karoserist Maribor
        <br />
        Črpalka: Prenosna motorna brizgalna Rosenbauer 8/8
        <br />
        Vozilo je bilo namenjeno gašenju požarov, prevozu moštva, orodja in
        opreme na kraj intervencije.
      </Typography>
    ),
  },
  {
    name: "Avtocisterna",
    image: "/images/vozniPark/ac_staro.webp",
    content: (
      <Typography color="text.secondary">
        Podvozje: TAM 110 T 10 (1977)
        <br />
        Nadgradnja: Karoserist Maribor
        <br />
        Črpalka: Turboinštitut - 1600 l/min
        <br />
        Prostornina rezervoarja: 5000 litrov
        <br />
        Vozilo je bilo zaradi večje količine vode namenjeno oskrbi požarišča z
        vodo in prevozu pitne vode.
      </Typography>
    ),
  },
  {
    name: "Gasilsko vozilo",
    image: "/images/vozniPark/gv_staro1.webp",
    content: (
      <Typography color="text.secondary">
        Podvozje: IMV 1600 Super B<br />
        Nadgradnja: Karoserist Maribor
        <br />
        Vozilo je bilo namenjeno prevozu moštva, orodja in opreme na kraj
        intervencije.
      </Typography>
    ),
  },
  {
    name: "Gasilsko vozilo",
    image: "/images/vozniPark/gv_staro2.webp",
    content: (
      <Typography color="text.secondary">
        Podvozje: Ford BB
        <br />
      </Typography>
    ),
  },
  {
    name: "Motorna brizgalna Rosenbauer",
    image: "/images/vozniPark/mb_staro1.webp",
    content: (
      <Typography color="text.secondary">
        Tip: vprežna motorna brizgalna
        <br />
        Model: Mojstrana
        <br />
        Leto izdelave: 1913
        <br />
        Posadka: 6 sedežev na sprednjem kozlu
        <br />
        Motorni agregat: Austro-Fiat, vodno hlajen, 8-9 konjskih moči pri 2400
        obratih na minuto
        <br />
        Črpalka: 400-450 l/min, na višini 60 m je pretok 350 l/m in višina curka
        38 m<br />
        <b>Od 4 edina ohranjena in delujoča na slovenskem.</b>
      </Typography>
    ),
  },
  {
    name: "Motorna brizgalna R. A. Smrekal",
    image: "/images/vozniPark/mb_staro2.webp",
    content: (
      <Typography color="text.secondary">
        Tip: vprežna ročna brizgalna
        <br />
        Leto izdelave: 1898
        <br />
        Leto prodaje: 1954 - PGD Veliki Cirnik
        <br />
        Ročni pogon: minimalno 4 osebe
      </Typography>
    ),
  },
];
