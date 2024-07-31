import { Chroma } from "@/types/weaponType";
import { useState } from "react";
import { normalizedChromaName } from "@/utils/normalizedChromaName";

export const useSkinCardInfo = (chromas: Chroma[]) => {
  const [currentChroma, setCurrentChroma] = useState({
    currentChromaName: normalizedChromaName(chromas[0].displayName),
    currentChromaImg: chromas[0].fullRender,
    currentChromaUuid:chromas[0].uuid
  });

  const { currentChromaName, currentChromaImg,currentChromaUuid } = currentChroma;

  const changeCurrentChroma = ({
    chromaName,
    chromaImg,
    chromaUuid
  }: {
    chromaName: string;
    chromaImg: string | null ;
    chromaUuid:string
  }) => {
    const newState = {
      currentChromaName:chromaName,
      currentChromaImg:chromaImg,
      currentChromaUuid:chromaUuid
    };
    setCurrentChroma(newState);
  };
  return {
    currentChromaName,
    currentChromaImg,
    currentChromaUuid,
    changeCurrentChroma,
  };
};
