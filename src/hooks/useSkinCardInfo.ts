import { Chroma } from "@/types/weaponType";
import { useState } from "react";
// import { normalizedChromaName } from "@/utils/normalizedChromaName";

export const useSkinCardInfo = (chromas: Chroma[]) => {
  console.log(chromas);
  const [chroma, setChroma] = useState(chromas[0]);

  const changeChroma = (index: number) => {
    setChroma(chromas[index]);
  };

  return {
    chroma,
    changeChroma,
  };
};
