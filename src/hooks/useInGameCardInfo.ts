import {  useState } from "react";
import { type Datum } from "@/types/playerCardType";

const initStateOfCard = {
  uuid: "33c1f011-4eca-068c-9751-f68c788b2eee",
  displayName: "The Way Forward Card",
  isHiddenIfNotOwned: false,
  themeUuid: null,
  displayIcon:
    "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/displayicon.png",
  smallArt:
    "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/smallart.png",
  wideArt:
    "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/wideart.png",
  largeArt:
    "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/largeart.png",
  assetPath:
    "ShooterGame/Content/Personalization/PlayerCards/Act1_2_BP/Birb/Playercard_Birb_PrimaryAsset",
};

export function useInGameCardInfo() {
  const [cardInfo, setCardInfo] = useState<Datum>(initStateOfCard);

  const changeCardInfo = (newInfo: Datum) => {
    setCardInfo(newInfo);
  };
  return {
    cardInfo,
    changeCardInfo,
  };
}