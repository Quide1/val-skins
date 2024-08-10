import { useRef, useState } from "react";
import { type Datum } from "@/types/playerCardType";

export function usePlayerCards() {
  const [allCards, setAllCards] = useState<Datum[]|null>(null);
  const allCardsRef = useRef<Datum[] | null>(null);

  const createNewRef = (newUserCards: Datum[]) => {
    allCardsRef.current = newUserCards;
  };

  function searchSkinByName(words: string) {
    const newCards = allCardsRef.current?.filter((i) =>
      i.displayName.match(new RegExp(words, "i"))
    );
    newCards ? setAllCards(newCards) : null;
  }

  return {
    allCardsRef,
    allCards,
    setAllCards,
    createNewRef,
    searchSkinByName,
    
  };
}
