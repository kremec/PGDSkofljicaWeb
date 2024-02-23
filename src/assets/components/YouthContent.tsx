import {
    Divider,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Stack,
    Typography,
    useMediaQuery
} from "@mui/material";

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
                    Če želite svojega otroka prijaviti na gasilske vaje, kontaktirajte katerega izmed mentorjev preko
                    spodaj navedenih telefonskih številk, ali pa se oglasite na vajah, ki potekajo po spodnjih terminih.
                </Typography>
                <Divider/>
                <Stack direction={{md:"column", lg:"row"}} textAlign={"center"} justifyContent={"space-around"}>
                    <Typography>
                        <b>Kontakti mentorjev:</b><br/>
                        Gašper Vešligaj: <a href="tel:+386 40 379 212">+386 40 379 212</a><br/>
                        Rok Brglez: <a href="tel:+386 41 659 133">+386 41 659 133</a><br/>
                        Klemen Remec: <a href="tel:+386 70 754 018">+386 70 754 018</a>
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
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
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
