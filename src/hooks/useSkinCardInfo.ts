import { Chroma } from "@/types/weaponType";
import { useState } from "react";

export const useSkinCardInfo = (chromas: Chroma[]) => {
  const [chroma, setChroma] = useState(chromas[0]);
  const changeChroma = (index: number) => {
    setChroma(chromas[index]);
  };

  return {
    chroma,
    changeChroma,
  };
};
