import { Button, Grid, Stack, Typography } from "@mui/material";
import {Home, History, FireTruck, FireExtinguisher, AlternateEmail} from "@mui/icons-material";

type CenterContentState = "Home" | "History" | "Vehicles" | "Youth" | "Contact";

interface Props {
  centerContentState: CenterContentState;
  updateCenterContentState: (test: CenterContentState) => void;
}

const TopNavigation = ({
  centerContentState,
  updateCenterContentState,
}: Props) => {
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

  return (
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
  );
};

export default TopNavigation;
