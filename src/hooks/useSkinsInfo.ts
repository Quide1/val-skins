import { useState, useRef } from "react";
import { type Skin } from "@/types/weaponType";

export function useSkinsInfo() {
  const [weaponSkins, setWeaponSkins] = useState<Skin[] | null>(null);
  const weaponSkinsRef = useRef<Skin[] | null>(null);

  function createNewRef(newSkinRef: Skin[]) {
    weaponSkinsRef.current = newSkinRef;
  }

  function searchSkinByName(words: string) {
    const newListSkins = weaponSkinsRef.current?.filter((i) =>
      i.displayName.match(new RegExp(words, "i"))
    );
    newListSkins ? setWeaponSkins(newListSkins) : null;
  }

  function resetListSkins() {
    setWeaponSkins(weaponSkinsRef.current);
  }

  return {
    weaponSkins,
    setWeaponSkins,
    searchSkinByName,
    resetListSkins,
    createNewRef,
  };
}
