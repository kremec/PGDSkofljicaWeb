import {
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from "@mui/material";
import ModalImage from "react-modal-image";

const YouthContent = () => {
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
          Mladina
        </Typography>

        <Typography textAlign={"center"}>
          Želite svojega otroka prijaviti na gasilske vaje? Kontaktirajte
          mentorje preko spodaj navedenih kontaktnih podatkov, ali pa se
          oglasite na vajah, ki potekajo po navedenih terminih.
        </Typography>
        <Divider />
        <Stack
          direction={{ md: "column", lg: "row" }}
          textAlign={"center"}
          justifyContent={"space-around"}
        >
          <Typography>
            <b>Kontakti mentorjev:</b>
            <br />
            Gašper Vešligaj:{" "}
            <a style={{ unicodeBidi: "bidi-override", direction: "rtl" }}>
              212 973 04 683+
            </a>
            <br />
            Mail:{" "}
            <a style={{ unicodeBidi: "bidi-override", direction: "rtl" }}>
              is.acijlfoks-dgp@anidalm
            </a>
          </Typography>
          <Typography>
            <b>Tedensko srečanje mladine:</b>
            <br />
            Pionirji (od 7 do 11 let): četrtek ob 18. uri
            <br />
            Mladinci (od 12 do 15 let): torek ob 18. uri
            <br />
            Pripravniki (od 16 do 18 let): torek ob 18. uri
          </Typography>
          <Typography>
            <b>Naslednja tekmovanja:</b>
            <br />
            Kviz - 2. marec 2024 - OŠ Ig
          </Typography>
        </Stack>
        <Divider />

        <ImageList
          style={{ textAlign: "center" }}
          sx={{
            columnCount: {
              md: "1 !important",
              lg: "2 !important",
              xl: "3 !important",
            },
          }}
          cols={1}
          variant="masonry"
          gap={10}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <ModalImage small={item.img} large={item.img} alt={item.title} />
              <ImageListItemBar position="below" title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </div>
  );
};

export default YouthContent;

const itemData = [
  {
    img: "/images/mladina/mladina_1.webp",
    title: "Uspeh mladincev na gasilskem kvizu",
  },
  {
    img: "/images/mladina/mladina_2.webp",
    title: "Na startu gasilske orientacije",
  },
  {
    img: "/images/mladina/mladina_3.webp",
    title: "Vaja z vedrovko",
  },
  {
    img: "/images/mladina/mladina_4.webp",
    title: "Vaja z vozli",
  },
  {
    img: "/images/mladina/mladina_5.webp",
    title: "Spoznavanje izolirnih dihalnih aparatov",
  },
  {
    img: "/images/mladina/mladina_6.webp",
    title: "Zaključni izlet v adrenalinskem parku",
  },
  {
    img: "/images/mladina/mladina_7.webp",
    title: "Še ena gasilska",
  },
  {
    img: "/images/mladina/mladina_8.webp",
    title: "Spoznavanje gasilnih aparatov",
  },
];
