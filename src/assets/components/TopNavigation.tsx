import {
    AppBar,
    Button, Collapse, Divider,
    List,
    ListItemButton,
    Stack,
    Toolbar,
    Typography,
    useMediaQuery
} from "@mui/material";
import {
    Home,
    FireTruck,
    FireExtinguisher,
    AlternateEmail,
    ExpandLess,
    ExpandMore, CalendarMonth,
} from "@mui/icons-material";
import {useState} from "react";

type CenterContentState = "Home" | "History" | "Vehicles" | "Youth" | "Contact";

interface Props {
    centerContentState: CenterContentState;
    updateCenterContentState: (test: CenterContentState) => void;
}

const TopNavigation = ({updateCenterContentState}: Props) => {
    const handleHomeButtonClick = () => {
        updateCenterContentState("Home");
    };
    const handleHistoryButtonClick = () => {
        updateCenterContentState("History");
    };
    const handleVehiclesButtonClick = () => {
        updateCenterContentState("Vehicles");
    };
    const handleYouthButtonClick = () => {
        updateCenterContentState("Youth");
    };
    const handleContactButtonClick = () => {
        updateCenterContentState("Contact");
    };

    const small = useMediaQuery("(max-width:999px)");
    const full = useMediaQuery("(min-width:1000px)");

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleClick = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar color="inherit" position="static">
            <Toolbar variant="dense">
                {full && (
                    <>
                        <Typography variant="h6" paddingRight={3}>
                            PGD ŠKOFLJICA
                        </Typography>

                        <Divider orientation="vertical" flexItem/>

                        <Button onClick={handleHomeButtonClick} sx={{paddingX: '2vh'}}>
                            <Stack alignItems={"center"} spacing={1} direction={"row"}>
                                <Home/>
                                <Typography variant="body2">Domov</Typography>
                            </Stack>
                        </Button>
                        <Divider orientation="vertical" variant="middle" flexItem/>
                        <Button onClick={handleHistoryButtonClick} sx={{paddingX: '2vh'}}>
                            <Stack alignItems={"center"} spacing={1} direction={"row"}>
                                <CalendarMonth/>
                                <Typography variant="body2">Zgodovina</Typography>
                            </Stack>
                        </Button>
                        <Divider orientation="vertical" variant="middle" flexItem/>
                        <Button color="inherit" onClick={handleVehiclesButtonClick} sx={{paddingX: '2vh'}}>
                            <Stack alignItems={"center"} spacing={1} direction={"row"}>
                                <FireTruck/>
                                <Typography variant="body2">Vozni park</Typography>
                            </Stack>
                        </Button>
                        <Divider orientation="vertical" variant="middle" flexItem/>
                        <Button color="inherit" onClick={handleYouthButtonClick} sx={{paddingX: '2vh'}}>
                            <Stack alignItems={"center"} spacing={1} direction={"row"}>
                                <FireExtinguisher/>
                                <Typography variant="body2">Mladina</Typography>
                            </Stack>
                        </Button>
                        <Divider orientation="vertical" variant="middle" flexItem/>
                        <Button color="inherit" onClick={handleContactButtonClick} sx={{paddingX: '2vh'}}>
                            <Stack alignItems={"center"} spacing={1} direction={"row"}>
                                <AlternateEmail/>
                                <Typography variant="body2">Kontakt</Typography>
                            </Stack>
                        </Button>
                    </>
                )}
                {small && (
                    <>
                        <List>
                            <ListItemButton onClick={handleClick}>
                                {drawerOpen ? (
                                    <ExpandLess/>
                                ) : (
                                    <ExpandMore/>
                                )}
                                <Typography
                                    variant="h6"
                                    sx={{paddingX: '2vh'}}
                                    onClick={() => {
                                        setDrawerOpen(false);
                                    }}
                                >
                                    PGD Škofljica
                                </Typography>
                            </ListItemButton>
                            <Collapse
                                in={drawerOpen}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List
                                    component="div"
                                    disablePadding
                                >
                                    <ListItemButton color="inherit" onClick={handleHomeButtonClick}>
                                        <Stack alignItems={"center"} spacing={2} direction={"row"}>
                                            <Home/>
                                            <Stack alignItems={"left"} direction={"column"}>
                                                <Typography variant="body1">Domov</Typography>
                                                <Typography variant="caption">Splošne informacije in novice</Typography>
                                            </Stack>
                                        </Stack>
                                    </ListItemButton>
                                    <ListItemButton color="inherit" onClick={handleHistoryButtonClick}>
                                        <Stack alignItems={"center"} spacing={2} direction={"row"}>
                                            <CalendarMonth/>
                                            <Stack alignItems={"left"} direction={"column"}>
                                                <Typography variant="body1">Zgodovina</Typography>
                                                <Typography variant="caption">Zgodovina razvoja društva</Typography>
                                            </Stack>
                                        </Stack>
                                    </ListItemButton>
                                    <ListItemButton color="inherit" onClick={handleVehiclesButtonClick}>
                                        <Stack alignItems={"center"} spacing={2} direction={"row"}>
                                            <FireTruck/>
                                            <Stack alignItems={"left"} direction={"column"}>
                                                <Typography variant="body1">Vozni park</Typography>
                                                <Typography variant="caption">Specifikacije intervencijskih
                                                    vozil</Typography>
                                            </Stack>
                                        </Stack>
                                    </ListItemButton>
                                    <ListItemButton color="inherit" onClick={handleYouthButtonClick}>
                                        <Stack alignItems={"center"} spacing={2} direction={"row"}>
                                            <FireExtinguisher/>
                                            <Stack alignItems={"left"} direction={"column"}>
                                                <Typography variant="body1">Mladina</Typography>
                                                <Typography variant="caption">Dogajanje in prijave na vaje</Typography>
                                            </Stack>
                                        </Stack>
                                    </ListItemButton>
                                    <ListItemButton color="inherit" onClick={handleContactButtonClick}>
                                        <Stack alignItems={"center"} spacing={2} direction={"row"}>
                                            <AlternateEmail/>
                                            <Stack alignItems={"left"} direction={"column"}>
                                                <Typography variant="body1">Kontakt</Typography>
                                                <Typography variant="caption">Kontaktni podatki</Typography>
                                            </Stack>
                                        </Stack>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </>
                )}
            </Toolbar>
        </AppBar>
        /*
      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} paddingY={0.2}>
        <Grid container spacing={2} direction={"row"} justifyContent={"center"}>
          <Grid
            item
            sm
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {centerContentState == "Home" ? (
              <Button onClick={handleHomeButtonClick}>
                <Stack alignItems={"center"} spacing={1} direction={"row"}>
                  <Home />
                  <Typography variant="body2">Domov</Typography>
                </Stack>
              </Button>
            ) : (
                <Button onClick={handleHomeButtonClick}>
                  <Stack alignItems={"center"} spacing={1} direction={"row"}>
                    <Home />
                    <Typography variant="body2">Domov</Typography>
                  </Stack>
                </Button>
            )}
          </Grid>
          <Grid
            item
            sm
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {centerContentState == "History" ? (
              <Button onClick={handleHistoryButtonClick}>
                <Stack alignItems={"center"} spacing={1} direction={"row"}>
                  <History />
                  <Typography variant="body2">Zgodovina</Typography>
                </Stack>
              </Button>
            ) : (
                <Button onClick={handleHistoryButtonClick}>
                  <Stack alignItems={"center"} spacing={1} direction={"row"}>
                    <History />
                    <Typography variant="body2">Zgodovina</Typography>
                  </Stack>
                </Button>
            )}
          </Grid>
          <Grid
            item
            sm
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {centerContentState == "Vehicles" ? (
              <Button onClick={handleVehiclesButtonClick}>
                <Stack alignItems={"center"} spacing={1} direction={"row"}>
                  <FireTruck />
                  <Typography variant="body2">Vozni park</Typography>
                </Stack>
              </Button>
            ) : (
                <Button onClick={handleVehiclesButtonClick}>
                  <Stack alignItems={"center"} spacing={1} direction={"row"}>
                    <FireTruck />
                    <Typography variant="body2">Vozni park</Typography>
                  </Stack>
                </Button>
            )}
          </Grid>
          <Grid
            item
            sm
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {centerContentState == "Youth" ? (
              <Button onClick={handleYouthButtonClick}>
                <Stack alignItems={"center"} spacing={1} direction={"row"}>
                  <FireExtinguisher />
                  <Typography variant="body2">Mladina</Typography>
                </Stack>
              </Button>
            ) : (
              <Button onClick={handleYouthButtonClick}>
                <Stack alignItems={"center"} spacing={1} direction={"row"}>
                  <FireExtinguisher />
                  <Typography variant="body2">Mladina</Typography>
                </Stack>
              </Button>
            )}
          </Grid>
          <Grid
            item
            sm
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {centerContentState == "Contact" ? (
              <Button onClick={handleContactButtonClick}>
                <Stack alignItems={"center"} spacing={1} direction={"row"}>
                  <AlternateEmail />
                  <Typography variant="body2">Kontakt</Typography>
                </Stack>
              </Button>
            ) : (
                <Button onClick={handleContactButtonClick}>
                  <Stack alignItems={"center"} spacing={1} direction={"row"}>
                    <AlternateEmail />
                    <Typography variant="body2">Kontakt</Typography>
                  </Stack>
                </Button>
            )}
          </Grid>
        </Grid>
      </Stack>
         */
    );
};

export default TopNavigation;
