import { Divider } from "@mui/material";
import { useState } from "react";
import TopNavigation from "../components/TopNavigation";
import CenterContent from "../components/CenterContent";

type CenterContentState = "Home" | "History" | "Vehicles" | "Youth" | "Contact";

const HomePage = () => {
    const [centerContentState, setCenterContentState] =
        useState<CenterContentState>("Home");

    return (
        <>
            <TopNavigation
                centerContentState={centerContentState}
                updateCenterContentState={setCenterContentState}
            />
            <Divider style={{ width: "100%" }} variant="middle" />
            <CenterContent centerContentState={centerContentState} />
        </>
    );
};

export default HomePage;
