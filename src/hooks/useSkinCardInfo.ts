import { Chroma } from "@/types/weaponType";
import { useState } from "react";

export const useSkinCardInfo = (chromas: Chroma[]) => {
  const [chroma, setChroma] = useState({
    ...chromas[0],
    displayName: "",
  });
  const changeChroma = (index: number) => {
    if (index == 0) {
      setChroma({ ...chromas[index], displayName: "" });
      return;
    }
    setChroma(chromas[index]);
  };

  return {
    chroma,
    changeChroma,
  };
};
