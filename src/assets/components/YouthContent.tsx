import {
    Divider,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Stack,
    Typography,
    useMediaQuery
} from "@mui/material";
import ImagePopover from "./ImagePopover.tsx";

const HomeContent = () => {
    const small = useMediaQuery("(max-width:999px)");

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Stack spacing={1} sx={{width: '90vw'}} display={"flex"} paddingY={3}>
                <Typography variant="h3" textAlign={"center"}>
                    Mladina
                </Typography>

                <Typography textAlign={"center"}>
                    Želite svojega otroka prijaviti na gasilske vaje? Kontaktirajte mentorje preko
                    spodaj navedenih kontaktnih podatkov, ali pa se oglasite na vajah, ki potekajo po navedenih
                    terminih.
                </Typography>
                <Divider/>
                <Stack direction={{md: "column", lg: "row"}} textAlign={"center"} justifyContent={"space-around"}>
                    <Typography>
                        <b>Kontakti mentorjev:</b><br/>
                        Gašper Vešligaj: <a style={{unicodeBidi: "bidi-override", direction: "rtl"}}>212 973 04 683+</a><br/>
                        Mail: <a style={{unicodeBidi: "bidi-override", direction: "rtl"}}>is.acijlfoks-dgp@anidalm</a>
                    </Typography>
                    <Typography>
                        <b>Tedensko srečanje mladine:</b><br/>
                        Pionirji (od 7 do 11 let): četrtek ob 18. uri<br/>
                        Mladinci (od 12 do 15 let): torek ob 18. uri<br/>
                        Pripravniki (od 16 do 18 let): torek ob 18. uri
                    </Typography>
                    <Typography>
                        <b>Naslednja tekmovanja:</b><br/>
                        Kviz - 2. marec 2024 - OŠ Ig
                    </Typography>
                </Stack>
                <Divider/>

                <ImageList variant="masonry" cols={small ? 1 : 2} gap={10}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <ImagePopover src={item.img} alt={item.img} width={"100%"}/>
                            <ImageListItemBar position="below" title={item.title}/>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Stack>
        </div>
    );
};

const itemData = [
    {
        img: '/images/mladina/mladina_1.jpg',
        title: 'Uspeh mladincev na gasilskem kvizu'
    },
    {
        img: '/images/mladina/mladina_2.jpg',
        title: 'Na startu gasilske orientacije'
    },
    {
        img: '/images/mladina/mladina_3.jpg',
        title: 'Vaja z vedrovko'
    },
    {
        img: '/images/mladina/mladina_4.jpg',
        title: 'Vaja z vozli'
    },
    {
        img: '/images/mladina/mladina_5.jpg',
        title: 'Spoznavanje izolirnih dihalnih aparatov'
    },
    {
        img: '/images/mladina/mladina_6.jpg',
        title: 'Zaključni izlet v adrenalinskem parku'
    },
    {
        img: '/images/mladina/mladina_7.jpg',
        title: 'Še ena gasilska'
    },
    {
        img: '/images/mladina/mladina_8.jpg',
        title: 'Spoznavanje gasilnih aparatov'
    }
]

export default HomeContent;
