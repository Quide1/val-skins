import { useRef, useState } from "react";
import { type Datum } from "@/types/playerCardType";

export function usePlayerCards() {
  const [allCards,setAllCards]=useState<Datum[]>()
  const allCardsRef = useRef<Datum[] | null>();
  
  const createNewRef = (newUserCards:Datum[])=>{
    allCardsRef.current =newUserCards
  }
  return {
    allCardsRef,
    allCards,
    setAllCards,
    createNewRef
  };
}
