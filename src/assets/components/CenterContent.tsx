import HomeContent from "./HomeContent";
import HistoryContent from "./HistoryContent.tsx";
import VehiclesContent from "./VehiclesContent.tsx";
import YouthContent from "./YouthContent.tsx";
import ContactContent from "./ContactContent.tsx";

type CenterContentState = "Home" | "History" | "Vehicles" | "Youth" | "Contact";

interface Props {
  centerContentState: CenterContentState;
}

const CenterContent = ({ centerContentState }: Props) => {
  switch (centerContentState) {
    case "Home":
      return <HomeContent />;
    case "History":
      return <HistoryContent />;
    case "Vehicles":
      return <VehiclesContent />;
    case "Youth":
      return <YouthContent />;
    case "Contact":
      return <ContactContent />;
    default:
      return <></>;
  }
};

export default CenterContent;
